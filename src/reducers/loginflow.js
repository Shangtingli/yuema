
import {initState, startState} from './stateInit';

function fillData(data,newState){
    const keys=Object.keys(data);
    debugger;
    for (let key of keys){
        if (key in newState){
            debugger;
            newState[key] = data[key];
        }
    }


}
const loginOperation = (state = initState, action) => {
    debugger;
    const newState = {...state};
    switch(action.type){
        default:
            return state;
        case "SWITCH_TO_LOGIN":
            newState.flow = 1;
            return newState;
        case "SWITCH_TO_REGISTER":
            newState.flow = 0;
            return newState;
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
            newState.flow = newState.flow + 1;
            if ('username' in action.data){
                newState.email = action.data.username;
            }
            fillData(action.data,newState);
            if (newState.flow === 2){
                newState.isLoggedIn = true;
            }
            debugger;
                /*********************************/
            return newState;
    }
}



export default loginOperation;