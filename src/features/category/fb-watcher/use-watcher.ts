import { collection, onSnapshot, query, where } from "firebase/firestore";
import { runInAction } from "mobx";
import { useEffect } from "react";

import { categoryStore, FB_COLLECTION_CATEGORY } from "entities/category";
import { adaptEntityForUi } from "entities/firebase-entity";
import { auth, db } from "shared";

export const useCategoriesState = () => {
  useEffect(() => {
    const ref = collection(db, FB_COLLECTION_CATEGORY);
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
