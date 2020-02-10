export const nextStep = (entry) => ({
    type: "NEXT_LOGIN_STEP",
    entry:entry
});

export const prevStep = (entry) => ({
    type: "PREV_LOGIN_STEP",
    entry:entry
})
