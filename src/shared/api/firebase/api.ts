import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./config";

export const getCurrentUserUID = () => auth.currentUser?.uid || "";

// FIXME: remove any

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
  <T>(col: string, currentUserUID: string, callback?: () => void) =>
  async (data: T) => {
    const newEntity = doc(collection(db, col));

    await setDoc(newEntity, {
      ...data,
      userId: currentUserUID,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    callback && callback();
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
