import { useEffect } from "react";

import { categoryStore } from "entities/category/index";
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

export const useCategoryWatcher = () => {
  useEffect(() => {
    const ref = collection(db, FB_COLLECTION_CATEGORY);
    const q = query(ref, where("userId", "==", auth.currentUser?.uid));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      let result: any[] = []; // TODO: remove any

      snapshot.docs.forEach((doc) => {
        result.push(adaptEntityForUi(doc));
      });

      categoryStore.updateCategories(result);
    });
    return () => unsubscribe();
  }, []);
};
