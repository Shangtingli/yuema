import {initState, startState} from './stateInit';
import {ADMIN_ROLES} from "../components/Constants"

function fillData(data,newState){
    const keys=Object.keys(data);
    for (let key of keys){
        if (key in newState){
            newState[key] = data[key];
        }
    }
}

const operations = (state = initState, action) => {
    const newState = {...state};
    switch(action.type){
        /**
         * Write the traveller information from database to the redux store
         */
        case "WRITE_TRAVELLERS_FROM_DATABASE":
            newState.travellerData= action.data;
            return newState;

        /**
         * Write the comment data from database to the state
         */
        case "WRITE_COMMENTS_FROM_DATABASE":
            newState.commentsData = action.data;
            return newState;

        /**
         * Write the store data information from database to the redux store
         */
        case "WRITE_STORES_FROM_DATABASE":
            newState.storeData = action.data;
            return newState;

        /**
         * Switch to the page flow if the user comes from login entry. I.E. The
         * user would retrieve the data from the database and jumps directly to
         * the page that asks you the information for flightDest and flightTime
         * rather than asking you feature which is for the first-time users
         */
        case "SWITCH_TO_LOGIN":
            newState.hasFeaturesStored = true;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            if (ADMIN_ROLES.includes(action.email)){
                newState.isAdmin = true;
            }
            newState.flow = 2;
            return newState;

        /**
         * Switch to the page flow if the user comes from register entry. I.E. The
         * user would not have any data from database. As a result, the user would be prompted
         * to first write the features, and then the flightTime and Destination
         */
        case "SWITCH_TO_REGISTER":
            newState.flow = 0;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            if (action.email in ADMIN_ROLES){
                newState.isAdmin = true;
            }
            return newState;

        case "FILL_FEATURES":
            fillData(action.data,newState);
            newState.clientDataReady=true;
            return newState;
        /**
         * When users change the tab on the nav bar
         */
        case "CHANGE_TAB":
            return {
                ...state,
                currentTab: action.tab
            };

        /**
         * When user logout from the system
         */
        case "LOGOUT":
            // localStorage.removeItem(TOKEN_KEY);
            return {...startState};

        /**
         * When user click on Next Tag in the page flow for login. For example, after user
         * enters all the features, clicked next
         */
        case "NEXT_STEP":
            newState.flow = newState.flow + 1;
            if ('username' in action.data){
                newState.email = action.data.username;
            }
            fillData(action.data,newState);
            if (newState.flow === 2){
                newState.isLoggedIn = true;
            }
            /*********************************/
            return newState;
        default:
            return state;
    }
}
export default operations;