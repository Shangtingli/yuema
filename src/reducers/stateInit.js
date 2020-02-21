
export const startState = {

    /**
     * Login/Register Webflow and features
     */
    flow:-1,
    remember: false,
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
    /**
     * Avatar
     */
    // avatarFile: null,
    // isAvatarLoading: false,
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

};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

