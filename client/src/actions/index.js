export const nextStep = (entry,data) => ({
    type: "NEXT_LOGIN_STEP",
    entry:entry, data: data
});

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
