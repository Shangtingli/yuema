export const nextStep = (entry,data) => ({
    type: "NEXT_LOGIN_STEP",
    data: data
});

export const switchRegisterEntry = {
    type: "SWITCH_TO_REGISTER"
}

export const switchLoginEntry = {
    type: "SWITCH_TO_LOGIN"
}

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
