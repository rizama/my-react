import firebase from '../../firebase'

// Use middleware thunk
export const actionUsername = () => {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch({
                type: "CHANGE_NAME",
                value: "Sam Pratama"
            })
        }, 2000);
    }
}

// Use middleware thunk
export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: "CHANGE_LOADING", value: true})
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(`Success: ${res}`)
                dispatch({type: "CHANGE_LOADING", value: false})
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({type: "CHANGE_LOADING", value: false})
            })
    )
}