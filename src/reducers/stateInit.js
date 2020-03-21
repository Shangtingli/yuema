/**
 * State default initialization for the entire project. Used in reducers/index.js to initialize the states.
 * @type {{flow: number, remember: boolean, hasFeaturesStored: boolean, isLoggedIn: boolean, shouldUpdateTravelPlan: boolean, id: string, sex: string, firstName: string, lastName: string, email: string, phoneNumber: string, ageRange: string, country: string, flightTime: string, flightDest: string, hobbies: Array, avatarUrl: null, avatarKey: null, intro: null, currentTab: string, clientDataReady: boolean, isAdmin: boolean, storeData: null, commentsData: null, travellerData: null}}
 */
export const startState = {

    /**
     * Login/Register Webflow and features
     */
    flow:-1,
    hasFeaturesStored: false,
    isLoggedIn: false,

    /**
     * Features
     */
    id: '',
    sex: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    ageRange: '',
    country: '',
    flightTime: '',
    flightDest: '',
    hobbies: [],
    avatarUrl: null,
    avatarKey: null,
    intro: null,
    /**
     * NavBar
     */
    currentTab: 'account',

    /**
     * Dashboard
     */
    clientDataReady: false,

    /**
     * Admin Roles Related
     */
    isAdmin: false,

    /**
     * StoreRecommendation
     */
    storeData: null,
    /**
     * Comments
     */
    commentsData: null,

    /**
     * People Recommendation
     */
    travellerData: null,
};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

