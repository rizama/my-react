import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCQv6nXDu81wPoV7UoaxMcyMxso9w0Y22I",
    authDomain: "rizkysampratama.firebaseapp.com",
    databaseURL: "https://rizkysampratama.firebaseio.com",
    projectId: "rizkysampratama",
    storageBucket: "rizkysampratama.appspot.com",
    messagingSenderId: "659169786606",
    appId: "1:659169786606:web:c89d90a8db113fc84c51ff",
    measurementId: "G-VTMHLWF2ML"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;