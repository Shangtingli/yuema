export const nextStep = (data) => ({
    type: "NEXT_STEP",
    data: data
});

export const switchRegisterEntry = (email,phoneNumber) => ({
    type: "SWITCH_TO_REGISTER",
    email: email,
    phoneNumber: phoneNumber
})

export const switchLoginEntry = (email,phoneNumber) => ({
    type: "SWITCH_TO_LOGIN",
    email: email,
    phoneNumber: phoneNumber
})

export const logout = {
    type: "LOGOUT"
};

export const changeTab = (tab) => ({
    type: "CHANGE_TAB",
    tab : tab
})

export const fillFeatures = (data) => ({
    type: "FILL_FEATURES",
    data: data
})


export const writeStoresFromDatabase = (data) => ({
    type: "WRITE_STORES_FROM_DATABASE",
    data: data
})

export const writeCommentsFromDatabase = (data) => ({
    type: "WRITE_COMMENTS_FROM_DATABASE",
    data: data
})