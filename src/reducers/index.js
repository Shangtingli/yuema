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
        case "CHANGE_ADD_FORM_VISIBILITY":
            newState.isAddCommentsVisible = action.visibility
            return newState;
        case "WRITE_COMMENTS_FROM_DATABASE":
            newState.commentsData = action.data;
            return newState;
        case "CHANGE_COMMENTS_VISIBILITY":
            newState.isCommentsVisible = action.visibility;
            return newState;
        case "HIDE_COMMENTS":
            newState.isCommentsVisible = false;
            return newState;
        case "WRITE_STORES_FROM_DATABASE":
            newState.storeData = action.data;
            return newState;
        case "SWITCH_TO_LOGIN":
            newState.flow = 2;
            newState.hasFeaturesStored = true;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            if (ADMIN_ROLES.includes(action.email)){
                newState.isAdmin = true;
            }
            return newState;
        case "SWITCH_TO_REGISTER":
            newState.flow = 0;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            if (action.email in ADMIN_ROLES){
                newState.isAdmin = true;
            }
            return newState;
        case "FILL_FEATURES":
            debugger;
            fillData(action.data,newState);
            newState.clientDataReady=true;

            return newState;
        case "CHANGE_TAB":
            return {
                ...state,
                currentTab: action.tab
            }
        case "LOGOUT":
            // localStorage.removeItem(TOKEN_KEY);
            return {...startState};
        case "NEXT_LOGIN_STEP":
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