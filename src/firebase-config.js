// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA9DcI3byw7h1hZusUyMrQYdc-Plrb2p2M",
  authDomain: "chartapp-c17f5.firebaseapp.com",
  projectId: "chartapp-c17f5",
  storageBucket: "chartapp-c17f5.appspot.com",
  messagingSenderId: "451781624830",
  appId: "1:451781624830:web:0e1608330ae92c10abf6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();