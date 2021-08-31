

import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9I1go9LVoLIROhs8RJkl6xMfIwa4_fg",
  authDomain: "slack-clone-ab921.firebaseapp.com",
  projectId: "slack-clone-ab921",
  storageBucket: "slack-clone-ab921.appspot.com",
  messagingSenderId: "276358177077",
  appId: "1:276358177077:web:d18fad61c53ad257956c7c",
  measurementId: "G-HTWF08XJHW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
