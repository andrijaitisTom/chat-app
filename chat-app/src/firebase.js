import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACLeH_qE_zquj4E-7ATwYpmT8QMq5GNao",
  authDomain: "chat-app-e56d2.firebaseapp.com",
  projectId: "chat-app-e56d2",
  storageBucket: "chat-app-e56d2.appspot.com",
  messagingSenderId: "863558795659",
  appId: "1:863558795659:web:38e0ec85f9e9fa9e35af8e",
  measurementId: "G-HKD720HYCR",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
