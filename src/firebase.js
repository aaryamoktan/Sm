
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCL3P-7M8iyRJg1wSFGIJcQlK76WDdQr4s",
  authDomain: "dmssss.firebaseapp.com",
  projectId: "dmssss",
  storageBucket: "dmssss.appspot.com",
  messagingSenderId: "1018256965138",
  appId: "1:1018256965138:web:ec5f40519f2b42e4e7a2cb",
  measurementId: "G-KPYX1RV1DE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app)
 export const prov = new GoogleAuthProvider()
 export const db = getFirestore(app);
 export const storage = getStorage(app);