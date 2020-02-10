const stepOperation = (state = 0, action) => {
    switch(action.type){
        case "ADD_LOGIN_STEP":
            return state + 1;
        case "MINUS_LOGIN_STEP":
            return state - 1
        default:
            return state
    }
}

export default stepOperation;