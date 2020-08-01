import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB208XtCaQeVDvL66yA0PS-vnYLVuehO2g",
    authDomain: "dummyzon-c93d1.firebaseapp.com",
    databaseURL: "https://dummyzon-c93d1.firebaseio.com",
    projectId: "dummyzon-c93d1",
    storageBucket: "dummyzon-c93d1.appspot.com",
    messagingSenderId: "277684560360",
    appId: "1:277684560360:web:545d923d64f22ce5f3445d",
    measurementId: "G-N8324QTYX8"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };