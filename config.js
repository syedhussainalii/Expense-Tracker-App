// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5vqgoq7fQGzn2LNQs9cadjEUhV2wBZM8",
  authDomain: "expene-tracker-app.firebaseapp.com",
  projectId: "expene-tracker-app",
  storageBucket: "expene-tracker-app.appspot.com",
  messagingSenderId: "292238162518",
  appId: "1:292238162518:web:a5b97480f1e5385d2659f7",
  measurementId: "G-YYWWS2E6MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new  GoogleAuthProvider();

export {auth, provider};