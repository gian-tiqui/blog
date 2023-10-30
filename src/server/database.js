// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKI0Y6Bvo2CcbxqgA1lFfGQbG5UStbnro",
  authDomain: "blog-website-12eb2.firebaseapp.com",
  projectId: "blog-website-12eb2",
  storageBucket: "blog-website-12eb2.appspot.com",
  messagingSenderId: "371877650234",
  appId: "1:371877650234:web:805c9e2d3a3e17ef00fa03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
