
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
    const newState = {...state};
    switch(action.type){
        case "FILL_FEATURES":
            for (let key of Object.keys(action.data)){
                if (key in newState){
                    newState[key] = action.data[key];
                }
            }
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
            if (action.entry === 'login'){
                newState.loginflow += 1;
                if ('username' in action.data){
                    newState.email = action.data.username;
                }
                fillData(action.data,newState);
                if (newState.loginflow === 2){
                    // if (newState.remember)
                    // {
                    //     localStorage.setItem(TOKEN_KEY,JSON.stringify(newState));
                    // }
                    newState.isLoggedIn = true;

                }
                /*********************************/
                return newState;
            }
            else if (action.entry === 'register'){
                newState.registerflow += 1;
                fillData(action.data,newState);
                if (newState.registerflow ===3){
                    newState.isLoggedIn = true;
                    // localStorage.setItem(TOKEN_KEY,JSON.stringify(newState));
                }
                return newState;
            }
            else{return state;}
        default:
            return state;
    }
}



export default loginOperation;