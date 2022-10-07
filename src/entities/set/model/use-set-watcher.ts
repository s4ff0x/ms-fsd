import { runInAction } from "mobx";
import { useEffect } from "react";
import {
  adaptEntityForUi,
  collection,
  db,
  FB_COLLECTION_SET,
  getCurrentUserUID,
  onSnapshot,
  query,
  where,
} from "shared/api";
import { setStore } from "./store";

export const useSetWatcher = () => {
  useEffect(() => {
    const ref = collection(db, FB_COLLECTION_SET);
    const q = query(ref, where("userId", "==", getCurrentUserUID()));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      let result: any[] = []; // TODO: remove any

      snapshot.docs.forEach((doc) => {
        result.push(adaptEntityForUi(doc));
      });

      runInAction(() => {
        setStore.sets = result;
      });
    });
    return () => unsubscribe();
  }, []);
};
