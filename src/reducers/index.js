import {initState, startState} from './stateInit';
import {ADMIN_ROLES} from "../components/Constants"
import {Cache} from "aws-amplify";
import {CACHE_DURATION_MINUTES} from "../components/Constants";

function fillData(data,newState){
    const keys=Object.keys(data);
    for (let key of keys){
        if (key in newState){
            newState[key] = data[key];
            if (key === 'favorites'){
                newState[key] = new Set(data[key]);
            }
        }
    }
}

function setCache(newState){
    const toCache = JSON.stringify({
        email: newState.email,
        flightDest: newState.flightDest,
        flightTime: newState.flightTime,
        lat: newState.lat,
        long: newState.long
    })

    const now = new Date();
    var d2 = new Date ( now );
    d2.setMinutes ( now.getMinutes() + CACHE_DURATION_MINUTES );
    Cache.setItem(newState.email,toCache,{ expires: d2.getTime() })
    return;
}



const operations = (state = initState, action) => {
    const newState = {...state};
    switch(action.type){

        case "REMOVE_FAVORITE":
            newState['favorites'].delete(action.storeId)
            var filtered2 = newState.favoriteStoreData.filter(function(value,index,arr){
                return value['id'] != action.storeId;
            })

            newState.favoriteStoreData = filtered2;
            return newState;

        case "ADD_FAVORITE":
            newState['favorites'].add(action.storeId)

            for (let data of newState.notFavoriteStoreData){
                if (data.id === action.storeId){
                    newState.favoriteStoreData.push(data);
                    break;
                }
            }

            var filtered = newState.notFavoriteStoreData.filter(function(value, index, arr){
                return value['id'] != action.storeId;
            });


            newState.notFavoriteStoreData = filtered;

            return newState;
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
            newState.favoriteStoreData = action.favoriteStoreData;
            newState.notFavoriteStoreData = action.notFavoriteStoreData;
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
            const record = Cache.getItem(newState.email);
            if (record === null){

                newState.flow = 2;
            }
            else{
                const json = JSON.parse(record);
                newState.flightTime=json['flightTime'];
                newState.flightDest = json['flightDest'];
                newState.lat = json['lat'];
                newState.long=json['long'];
                fillData(json,newState);
                newState.flow =  3;
            }
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


            if (newState.flow === 3){
                if (newState['lat'] === undefined || newState['long'] === undefined){
                    navigator.geolocation.getCurrentPosition((position) => {
                        newState['lat'] = position.coords.latitude;
                        newState['long'] = position.coords.longitude;
                        setCache(newState);
                        return newState;
                    })
                }
                else{
                    setCache(newState);
                    return newState;
                }
            }

            return newState;
        default:
            return state;
    }
}
export default operations;