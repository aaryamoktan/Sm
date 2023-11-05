// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAekUb4Xw3E3T6ntC7capdj6iSgCkC3c28",
  authDomain: "dmstore-7d85a.firebaseapp.com",
  projectId: "dmstore-7d85a",
  storageBucket: "dmstore-7d85a.appspot.com",
  messagingSenderId: "607085913722",
  appId: "1:607085913722:web:913f403458c738389e3dc3",
  measurementId: "G-WWJT8FDHLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);