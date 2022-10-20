import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./config";
export * from "firebase/auth";
export { collection, onSnapshot, query, where } from "firebase/firestore";

export const getCurrentUserUID = () => auth.currentUser?.uid || "";
export const getDisplayName = () =>
  auth.currentUser?.displayName || auth.currentUser?.uid;
export const getEmail = () => auth.currentUser?.email;
export const getPhotoURL = () => auth.currentUser?.photoURL;
export const getUserData = () => ({
  email: getEmail() || "",
  photoURL: getPhotoURL() || "",
  displayName: getDisplayName() || "",
});

export const adaptEntityForUi = (doc: any) => {
  return {
    ...doc.data(),
    createdAt: doc.data().createdAt?.seconds,
    updatedAt: doc.data().updatedAt?.seconds,
    uid: doc.id,
  };
};

export const adaptEntityForServer = (entity: any) => {
  const { uid, ...rest } = entity;
  return rest;
};

export const getCreateAction =
  <T>(col: string, callback: () => void = () => {}) =>
  async (data: T) => {
    const newEntity = doc(collection(db, col));

    await setDoc(newEntity, {
      ...data,
      userId: getCurrentUserUID(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    callback();
  };

export const getUpdateAction =
  <T>(col: string, callback: () => void = () => {}) =>
  async (data: T, uid: string) => {
    const entity = doc(db, `${col}/${uid}`);

    await updateDoc(entity, {
      ...adaptEntityForServer(data),
      updatedAt: serverTimestamp(),
    });

    callback();
  };

export const getDeleteAction =
  (col: string, callback: () => void = () => {}) =>
  async (uid: string) => {
    const entity = doc(db, `${col}`, uid);

    await deleteDoc(entity);
    callback();
  };
