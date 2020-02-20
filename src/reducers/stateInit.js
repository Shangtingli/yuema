
// const isLoggedIn = Boolean(localStorage.getItem(TOKEN_KEY));

function tagColorInit(){
    var arr =  Array.from({ length: 12 });
    for(let i in arr){
        arr[i] = false;
    }
    return arr;
}
export const startState = {
    flow:-1,
    hasFeaturesStored: false,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    remember: false,
    ageRange: '',
    country: '',
    flightTime: '',
    flightDest: '',
    isLoggedIn: false,
    currentTab: 'account',
    clientDataReady: false,
    sex: '',
    hobbies: [],

};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

