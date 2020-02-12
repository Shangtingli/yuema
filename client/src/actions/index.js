export const nextStep = (entry,data) => ({
    type: "NEXT_LOGIN_STEP",
    entry:entry, data: data
});

export const prevStep = (entry, data) => ({
    type: "PREV_LOGIN_STEP",
    entry:entry, data: data
})

export const submitInfo = (data) => ({
    type: "SUBMIT_ALL_INFO",
    data : data
})

export const logout = {
    type: "LOGOUT"
};

export const changeTab = (tab) => ({
    type: "CHANGE_TAB",
    tab : tab
})
