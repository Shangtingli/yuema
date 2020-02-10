
import initstate from './stateInit';
const loginOperation = (state = initstate, action) => {
    // debugger;
    switch(action.type){
        case "SUBMIT_ALL_INFO":
            return {
                ...state,
                sexualOrien: action.data.sexualOrien,
                flightTime: action.data.flightTime,
                flightDest: action.data.flightDest,
            }

        case "NEXT_LOGIN_STEP":
            const newState = {...state};
            if (action.entry === 'login'){
                newState.loginflow = 'characteristics';
                newState.email = action.data.username;
                /**TODO: Add backend operations **/
                newState.firstname = 'from data source';
                newState.lastname = 'from data source';
                newState.phonenumber = 'from data source';
                newState.nickname  = 'from data source'
                /*********************************/
                return newState;
            }
            else if (action.entry === 'register'){
                newState.registerflow = 'characteristics';
                newState.email = action.data.email;
                newState.firstname = action.data.firstname;
                newState.lastname = action.data.lastname;
                newState.nickname = action.data.nickname;
                newState.phonenumber = action.data.phonenumber;
                return newState;
            }
            else{return state;}
        case "PREV_LOGIN_STEP":
            if (action.entry === 'login' || action.entry === 'register'){
                return {...initstate}
            }
            else{return state;}
        default:
            return state;
    }
}



export default loginOperation;