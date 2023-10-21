// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apartment-marketplace.firebaseapp.com",
  projectId: "apartment-marketplace",
  storageBucket: "apartment-marketplace.appspot.com",
  messagingSenderId: "903022543855",
  appId: "1:903022543855:web:53e30a557264a56fb82c1a"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
