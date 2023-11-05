import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDaeib1hg1IX-5fqspx3jwlPkpkAmO7gdI",
  authDomain: "store-c503b.firebaseapp.com",
  projectId: "store-c503b",
  storageBucket: "store-c503b.appspot.com",
  messagingSenderId: "465766152231",
  appId: "1:465766152231:web:15f49d4dd6a71940d67602",
  measurementId: "G-KTEXCHEFJG"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app)
 export const db = getFirestore(app);
 export const storage = getStorage(app);