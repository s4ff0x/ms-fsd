import { initializeApp } from "firebase/app";
import {
  getFirestore,
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ms-test-eac52.firebaseapp.com",
  projectId: "ms-test-eac52",
  storageBucket: "ms-test-eac52.appspot.com",
  messagingSenderId: "241030928655",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-LT7CWJSCK8",
};

export const initializeFB = () => {
  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app);

  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence, // This uses localStorage
  });

  enableMultiTabIndexedDbPersistence(db).catch((e) =>
    console.error(e, "Unable to initialize persistence")
  );
  getAnalytics(app);

  return { app, db, auth };
};

export const { app, db, auth } = initializeFB();
