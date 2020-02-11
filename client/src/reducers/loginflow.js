
import initstate from './stateInit';

function fillData(data,newState){
    const keys=Object.keys(data);

    for (let key of keys){

        if (key in newState){
            debugger;
            newState[key] = data[key];
        }
    }
}
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
                /*********************************/
                return newState;
            }
            else if (action.entry === 'register'){
                newState.registerflow += 1;
                newState.isLoggedIn = true;
                fillData(action.data,newState);
                return newState;
            }
            else{return state;}
        case "PREV_LOGIN_STEP":
            if (action.entry === 'login' || action.entry === 'register'){
                const newState = {...state};
                if (action.entry ==='login')
                {newState.loginflow-=1;}
                else{
                    newState.registerflow -=1;
                }
                return newState;
            }
            else{return state;}
        default:
            return state;
    }
}



export default loginOperation;