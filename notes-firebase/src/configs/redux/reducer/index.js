let initialState = {
    popup: false,
    isLogin: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_POPUP":
            return {
                ...state,
                popup: action.value
            }
        case "CHANGE_ISLOGIN":
            return {
                ...state,
                isLogin: action.value
            }
        default:
            return state;
    }
}

export default reducer;