import stateinit from './stateInit';
const stepOperation = (state = stateinit, action) => {
    // debugger;
    switch(action.type){
        case "NEXT_LOGIN_STEP":
            state.loginpage= 'characteristics';
            debugger;
            return state;
        case "PREV_LOGIN_STEP":
            // debugger;
            state.loginpage= action.entry;
            return state;
        default:
            return state;
    }
}

export default stepOperation;