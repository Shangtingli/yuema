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
     * Features in DynamoDB
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
    //TODO: Change hobbies to categories across all project
    hobbies: [],
    favorites: new Set(),
    avatarUrl: null,
    avatarKey: null,
    intro: null,

    /**
     * Features in Cache
     */
    lat: undefined,
    long: undefined,
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
    favoriteStoreData: null,
    notFavoriteStoreData: null,
    /**
     * Comments
     */
    commentsData: null,
    updateStoreFlag: true,
    /**
     * People Recommendation
     */
    travellerData: null,
};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

