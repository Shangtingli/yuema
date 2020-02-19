
import {initState, startState} from './stateInit';

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
        default:
            return state;
        case "SWITCH_TO_LOGIN":
            newState.flow = 1;
            newState.hasFeaturesStored = true;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            return newState;
        case "SWITCH_TO_REGISTER":
            newState.flow = 0;
            newState.email = action.email;
            newState.phoneNumber = action.phoneNumber;
            return newState;
        case "FILL_FEATURES":
            fillData(action.data,newState);
            newState.clientDataReady=true;
            debugger;
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
    }
}



export default loginOperation;