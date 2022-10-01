import { auth, db } from "entities/firebase/firebase";
import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

// TODO: remove any

export const FB_COLLECTIONS = {
  CATEGORIES: "categories",
  SETS: "sets",
};

export const adaptEntityForUi = (doc: any) => {
  return {
    ...doc.data(),
    createdAt: doc.data().createdAt?.seconds,
    updatedAt: doc.data().updatedAt?.seconds,
    uid: doc.id,
  };
};

export const currentUserUID = () => auth.currentUser?.uid || "";

export const adaptEntityForServer = (entity: any) => {
  const { uid, ...rest } = entity;
  return rest;
};

export const entityCreator =
  <T>(col: string, callback?: () => void) =>
  async (data: T) => {
    const newEntity = doc(collection(db, col));

    await setDoc(newEntity, {
      ...data,
      userId: currentUserUID(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    callback && callback();
  };

export const entityUpdater =
  <T>(col: string, callback?: () => void) =>
  async (data: T, uid: string) => {
    const entity = doc(db, `${col}/${uid}`);

    await updateDoc(entity, {
      ...adaptEntityForServer(data),
      updatedAt: serverTimestamp(),
    });

    callback && callback();
  };

export const entityDeleter =
  (col: string, callback?: () => void) => async (uid: string) => {
    const entity = doc(db, `${col}`, uid);

    await deleteDoc(entity);
    callback && callback();
  };
