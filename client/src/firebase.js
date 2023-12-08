


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9bc73.firebaseapp.com",
  projectId: "mern-estate-9bc73",
  storageBucket: "mern-estate-9bc73.appspot.com",
  messagingSenderId: "1027100838421",
  appId: "1:1027100838421:web:f5ea6bddc755cb3bbd1c1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);