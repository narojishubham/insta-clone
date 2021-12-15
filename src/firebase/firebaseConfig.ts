import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC9nEPlPm_gaUhF6rBUrR2sVSfPTl0tW_E",
  authDomain: "instragram-app-1bd98.firebaseapp.com",
  projectId: "instragram-app-1bd98",
  storageBucket: "instragram-app-1bd98.appspot.com",
  messagingSenderId: "307019760257",
  appId: "1:307019760257:web:bdd5858f40023e6c150380",
};
// export const firebaseApp: any = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();

// export const db = app.database();
// export const firestoreDB = app.firestore();
