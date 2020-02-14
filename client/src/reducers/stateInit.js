import {TOKEN_KEY} from "../constants";
// const isLoggedIn = Boolean(localStorage.getItem(TOKEN_KEY));
export const startState = {
    loginflow: 0,
    registerflow: 0,
    firstName: '',
    lastName: '',
    email: '',
    nickName: '',
    phoneNumber: '',
    remember: false,
    sexualOrien: '',
    flightTime: '',
    flightDest: '',
    isLoggedIn: false,
    currentTab: 'account',
    clientDataReady: false,
    sex: '',
    /**
     * TODO: Maybe not secure... But should look into this issue when have time
     */
    password: ''
};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

