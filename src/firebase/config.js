import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDDwo_hbuEhMau3b9Q89y4m50E_6S6Z5PE",
    authDomain: "firegram-ffc1b.firebaseapp.com",
    projectId: "firegram-ffc1b",
    storageBucket: "firegram-ffc1b.appspot.com",
    messagingSenderId: "194018854523",
    appId: "1:194018854523:web:8f25fa6787b069cbca84de",
    measurementId: "G-5X919ZDXBF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };