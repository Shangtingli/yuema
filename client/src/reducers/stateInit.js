import {TOKEN_KEY} from "../constants";
const isLoggedIn = Boolean(localStorage.getItem(TOKEN_KEY));
export const startState = {
    loginflow: 0,
    registerflow: 0,
    firstname: '',
    lastname: '',
    email: '',
    nickname: '',
    phonenumber: '',
    remember: false,
    sexualOrien: '',
    flightTime: '',
    flightDest: '',
    isLoggedIn: false,
    currentTab: 'account'
};

export const initState= isLoggedIn ?
    JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

