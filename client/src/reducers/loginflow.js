
import {initState, startState} from './stateInit';
import {TOKEN_KEY} from "../constants"

function fillData(data,newState){
    const keys=Object.keys(data);

    for (let key of keys){

        if (key in newState){
            newState[key] = data[key];
        }
    }
}
const loginOperation = (state = initState, action) => {
    //
    switch(action.type){
        case "CHANGE_TAB":
            return {
                ...state,
                currentTab: action.tab
            }
        case "LOGOUT":
            localStorage.removeItem(TOKEN_KEY);
            return {...startState};

        case "NEXT_LOGIN_STEP":
            const newState = {...state};
            if (action.entry === 'login'){
                newState.loginflow += 1;

                if ('username' in action.data){
                    newState.email = action.data.username;
                }

                /**TODO: Add backend operations **/
                newState.firstname = 'from data source';
                newState.lastname = 'from data source';
                newState.phonenumber = 'from data source';
                newState.nickname  = 'from data source';
                newState.sexualOrien = 'from data source';
                newState.isLoggedIn = true;
                fillData(action.data,newState);
                if (newState.loginflow === 2 && newState.remember){
                    localStorage.setItem(TOKEN_KEY,JSON.stringify(newState));
                }
                /*********************************/
                return newState;
            }
            else if (action.entry === 'register'){
                newState.registerflow += 1;
                newState.isLoggedIn = true;
                fillData(action.data,newState);
                if (newState.registerflow ===3){
                    localStorage.setItem(TOKEN_KEY,JSON.stringify(newState));
                }
                return newState;
            }
            else{return state;}
        default:
            return state;
    }
}



export default loginOperation;