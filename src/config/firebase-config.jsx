// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWrb7TN-s2paUgbe4G1aKjExAyUNgm1NA",
  authDomain: "react-firebase-8a101.firebaseapp.com",
  projectId: "react-firebase-8a101",
  storageBucket: "react-firebase-8a101.appspot.com",
  messagingSenderId: "590012237765",
  appId: "1:590012237765:web:6bfef9a761525adbf06dac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
