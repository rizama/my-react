import firebase, { database } from '../../firebase'

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
    return new Promise((resolve, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log(`Success:`, res)
                dispatch({ type: "CHANGE_LOADING", value: false })
                resolve(true)
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({ type: "CHANGE_LOADING", value: false })
                reject(false)
            })
    })
}

// Use middleware thunk
export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                const dataUser = {
                    email: res.user.email,
                    uid: res.user.uid,
                    emailVerified: res.user.emailVerified,
                    refreshToken: res.user.refreshToken
                }

                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_ISLOGIN", value: true })
                dispatch({ type: "CHANGE_USER", value: dataUser })
                resolve(dataUser)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_ISLOGIN", value: false })
                reject(false)
            })
    })
}

export const storeDataToAPI = (data) => (dispatch) => {
    database.ref('notes/' + data.userId).push({
        title: data.title,
        date: data.date,
        content: data.content
    });
}

export const getDataFromAPI = (userId) => (dispatch) => {
    const urlNotes = database.ref(`notes/${userId}`);
    return new Promise((resolve, reject) => {
        urlNotes.on('value', (snapshot) => {
            const data = []
            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            });
            dispatch({ type: "SET_NOTES", value: data })
            resolve(snapshot.val())
        })
    })
}

export const updateDataToAPI = (data) => (dispatch) => {
    const urlNotes = database.ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve, reject) => {
        urlNotes.set({
            title: data.title,
            date: data.date,
            content: data.content
        }, (error) => {
            if (error) {
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}