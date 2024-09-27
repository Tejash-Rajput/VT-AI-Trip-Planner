// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "trip-e02ea.firebaseapp.com",
  projectId: "trip-e02ea",
  storageBucket: "trip-e02ea.appspot.com",
  messagingSenderId: "883065648942",
  appId: "1:883065648942:web:2c0a4507be6c60d766ecbf",
  measurementId: "G-WHZVLYLEEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
