
import stateinit from './stateInit';
const stepOperation = (state = stateinit, action) => {
    switch(action.type){
        case "NEXT_LOGIN_STEP":
            return 2
        case "PREV_LOGIN_STEP":
            return action.entry;
        default:
            return state;
    }
}

export default stepOperation;