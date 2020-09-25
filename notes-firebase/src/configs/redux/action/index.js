// Use middleware thunk
export const actionUsername = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({
            type: "CHANGE_NAME",
            value: "Sam Pratama"
        })
    }, 2000);
}