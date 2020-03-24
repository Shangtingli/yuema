/**
 * State default initialization for the entire project. Used in reducers/index.js to initialize the states.
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
    currentTab: 'people',

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
    allTravellerData: null,
    travellerData: null,
    genderFilter: "none",
    ageFilter: "none"
};

// export const initState= isLoggedIn ?
//     JSON.parse(localStorage.getItem(TOKEN_KEY)) : startState;

export const initState= {...startState};

