import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

type firebaseConfig= {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}
const firebaseConfig:firebaseConfig = {
 apiKey: "AIzaSyD0bkKROHmvls6PolzMgq0PIwO27p1rwtg",
  authDomain: "dashboard-8b234.firebaseapp.com",
  projectId: "dashboard-8b234",
  storageBucket: "dashboard-8b234.appspot.com",
  messagingSenderId: "657855067467",
  appId: "1:657855067467:web:c16fecd29f36c951bb64ce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();