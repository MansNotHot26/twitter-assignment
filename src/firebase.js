import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPfkmPBgLuZMDNqmDczyA0IItehcyBClo",
  authDomain: "twitter-assignment.firebaseapp.com",
  databaseURL: "https://twitter-assignment.firebaseio.com",
  projectId: "twitter-assignment",
  storageBucket: "twitter-assignment.appspot.com",
  messagingSenderId: "774266814770",
  appId: "1:774266814770:web:155c165ac7716b7725172b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
