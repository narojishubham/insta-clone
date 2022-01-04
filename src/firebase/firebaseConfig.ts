import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
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

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
export const auth: any = getAuth(firebaseApp);
const db = getFirestore();
const storage = getStorage();

export { db, storage };
