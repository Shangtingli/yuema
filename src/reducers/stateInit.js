
// const isLoggedIn = Boolean(localStorage.getItem(TOKEN_KEY));
export const startState = {
    flow:-1,
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
    sex: ''
};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

