import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJY3Thg20Kw6DKCnPThbZLeFkPk_x6BzM",
  authDomain: "proyectointegracion-c4fab.firebaseapp.com",
  databaseURL: "https://proyectointegracion-c4fab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyectointegracion-c4fab",
  storageBucket: "proyectointegracion-c4fab.appspot.com",
  messagingSenderId: "288884124265",
  appId: "1:288884124265:web:5fd2fd6585e243cb5990f8",
  measurementId: "G-10TPYNFML4",
};

export const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firebaseApp = initializeApp(firebaseConfig);

export { auth, signInWithEmailAndPassword, db, firebaseApp };



