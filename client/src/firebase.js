// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-naveen.firebaseapp.com",
  projectId: "mern-estate-naveen",
  storageBucket: "mern-estate-naveen.appspot.com",
  messagingSenderId: "435806164985",
  appId: "1:435806164985:web:4a92f9261e477ca4720f28"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);