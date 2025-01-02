// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-stack-eea17.firebaseapp.com",
  projectId: "mern-stack-eea17",
  storageBucket: "mern-stack-eea17.firebasestorage.app",
  messagingSenderId: "152699283782",
  appId: "1:152699283782:web:b28fd4152a8195fb0e5d47",
  measurementId: "G-2B8N37MED6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);