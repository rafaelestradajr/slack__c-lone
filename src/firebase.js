// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCh9I1go9LVoLIROhs8RJkl6xMfIwa4_fg",
    authDomain: "slack-clone-ab921.firebaseapp.com",
    projectId: "slack-clone-ab921",
    storageBucket: "slack-clone-ab921.appspot.com",
    messagingSenderId: "276358177077",
    appId: "1:276358177077:web:a0d07a8045d3202d956c7c",
    measurementId: "G-XC49Z4FJQF",

};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;