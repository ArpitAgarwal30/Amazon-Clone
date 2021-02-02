import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAb0CzYpBDk_Hu1H-8QiIBpULKCWwBIpu0",
    authDomain: "clone-c3951.firebaseapp.com",
    databaseURL: "https://clone-c3951.firebaseio.com",
    projectId: "clone-c3951",
    storageBucket: "clone-c3951.appspot.com",
    messagingSenderId: "320959891881",
    appId: "1:320959891881:web:e242ade96653285ed55cb8",
    measurementId: "G-1CQ6RXVLM5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); 


export {db, auth};