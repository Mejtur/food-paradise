import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-qFj0J7PW1hRZdLA7MU6mp3MiRA2gelA",
  authDomain: "food-paradise-b7af8.firebaseapp.com",
  databaseURL: "https://food-paradise-b7af8.firebaseio.com",
  projectId: "food-paradise-b7af8",
  storageBucket: "food-paradise-b7af8.appspot.com",
  messagingSenderId: "923154971420",
  appId: "1:923154971420:web:24c48368a46856774318d9",
  measurementId: "G-QWNYPKGPBK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const database = firebase.database();

export { db, auth, database };
