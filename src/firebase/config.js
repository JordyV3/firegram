import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAtKsPiMD5PRTLQ5oGXkw9HTVayh01Dtuo",
  authDomain: "firegram1-a736d.firebaseapp.com",
  projectId: "firegram1-a736d",
  storageBucket: "firegram1-a736d.appspot.com",
  messagingSenderId: "1024660802647",
  appId: "1:1024660802647:web:abd19463f37858e21e6712"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };