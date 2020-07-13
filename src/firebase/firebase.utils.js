import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDo6dPA-e--K57rmCLUpOMX5qqfLXjwyUA",
    authDomain: "crown-db-9efad.firebaseapp.com",
    databaseURL: "https://crown-db-9efad.firebaseio.com",
    projectId: "crown-db-9efad",
    storageBucket: "crown-db-9efad.appspot.com",
    messagingSenderId: "168460412989",
    appId: "1:168460412989:web:1b6f652eac6d4d1caea254",
    measurementId: "G-ZH5G13LYLC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
