import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKFvoNEeEjYmfUD2LMd_-1ZAsnmCoyVok",
  authDomain: "clone-ea61b.firebaseapp.com",
  projectId: "clone-ea61b",
  storageBucket: "clone-ea61b.appspot.com",
  messagingSenderId: "274410678873",
  appId: "1:274410678873:web:a874a2323b4ce80cd35f48",
  measurementId: "G-QDKVS6F6VJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
