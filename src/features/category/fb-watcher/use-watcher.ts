import { runInAction } from "mobx";
import { useEffect } from "react";

import { categoryStore } from "entities/category";
import {
  adaptEntityForUi,
  auth,
  collection,
  db,
  FB_COLLECTION_CATEGORY,
  onSnapshot,
  query,
  where,
} from "shared/api";

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
