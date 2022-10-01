import { useEffect } from "react";
import { adaptEntityForUi, auth, db, FB_COLLECTIONS } from "entities/firebase";
import { runInAction } from "mobx";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { categoryStore } from "entities/category";

export const useCategoriesState = () => {
  useEffect(() => {
    const ref = collection(db, FB_COLLECTIONS.CATEGORIES);
    const q = query(ref, where("userId", "==", auth.currentUser?.uid));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      let result: any[] = []; // TODO: remove any

      snapshot.docs.forEach((doc) => {
        result.push(adaptEntityForUi(doc));
      });

      runInAction(() => {
        categoryStore.categories = result;
      });
    });
    return () => unsubscribe();
  }, []);
};
