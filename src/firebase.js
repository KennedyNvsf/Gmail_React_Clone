
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCSHZ-0o6YJLymGzCnJDG4oC625m-MRTfQ",
    authDomain: "clone-kdevs-21241.firebaseapp.com",
    projectId: "clone-kdevs-21241",
    storageBucket: "clone-kdevs-21241.appspot.com",
    messagingSenderId: "216818108873",
    appId: "1:216818108873:web:4d2df49b37e9777765c018"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db, auth, provider};