import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYi0oWtn_W7RFp-qSAt8LZP_iqqVwxFrw",
  authDomain: "placement-tracker-web.firebaseapp.com",
  projectId: "placement-tracker-web",
  storageBucket: "placement-tracker-web.firebasestorage.app",
  messagingSenderId: "137204240039",
  appId: "1:137204240039:web:9c0f54802adc4111fb5582",
  measurementId: "G-884GW6G6KL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };