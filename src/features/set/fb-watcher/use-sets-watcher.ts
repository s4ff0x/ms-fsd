import { collection, onSnapshot, query, where } from "firebase/firestore";
import { runInAction } from "mobx";
import { useEffect } from "react";
import { setStore } from "entities/set";
import { adaptEntityForUi, auth, db, FB_COLLECTION_SET } from "shared/api";

export const useSetsState = () => {
  useEffect(() => {
    const ref = collection(db, FB_COLLECTION_SET);
    const q = query(ref, where("userId", "==", auth.currentUser?.uid));
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
