
import initstate from './stateInit';
const loginOperation = (state = initstate, action) => {
    // debugger;
    switch(action.type){
        case "NEXT_LOGIN_STEP":
            if (action.entry === 'login'){return {...state,loginflow:'characteristics'};}
            else if (action.entry === 'register'){return {...state,registerflow:'characteristics'};}
            else{return state;}
        case "PREV_LOGIN_STEP":
            if (action.entry === 'login'){return {...state,loginflow:action.entry};}
            else if (action.entry === 'register'){return {...state,registerflow:action.entry};}
            else{return state;}
        default:
            return state;
    }
}



export default loginOperation;