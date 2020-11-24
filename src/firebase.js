import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD960WbLIAeHMXrjYCv7C0t8wP97nYrrt8",
    authDomain: "dummyzon-cb839.firebaseapp.com",
    databaseURL: "https://dummyzon-cb839.firebaseio.com",
    projectId: "dummyzon-cb839",
    storageBucket: "dummyzon-cb839.appspot.com",
    messagingSenderId: "490249574533",
    appId: "1:490249574533:web:e0d865eedaca34fdc6f1ec",
    measurementId: "G-5J70QLL2HL"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };