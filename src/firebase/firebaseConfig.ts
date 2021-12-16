import { initializeApp } from "firebase/app";
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
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
export const auth: any = getAuth(firebaseApp);
