import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Your web app's Firebase configuration

let firebaseConfig = {

  apiKey: "AIzaSyB5US-jRtU7vfxlgxdP04SI9pzGzRTT660",
  authDomain: "o-crculo.firebaseapp.com",
  databaseURL: "https://o-crculo.firebaseio.com",
  projectId: "o-crculo",
  storageBucket: "o-crculo.appspot.com",
  messagingSenderId: "151675321525",
  appId: "1:151675321525:web:95d4df2a6b768a1e3c52fc"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;