import { getAnalytics } from "firebase/analytics";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";
import {
  getFirestore,
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4jWNP3XXngmWH39Lne2UFr3s5FQxYojc",
  authDomain: "ms-test-eac52.firebaseapp.com",
  projectId: "ms-test-eac52",
  storageBucket: "ms-test-eac52.appspot.com",
  messagingSenderId: "241030928655",
  appId: "1:241030928655:web:aa9e8170b98956e012c67a",
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
