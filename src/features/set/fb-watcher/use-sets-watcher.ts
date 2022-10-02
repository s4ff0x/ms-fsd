import { useEffect } from "react";
import { adaptEntityForUi } from "entities/entity-manager";
import { runInAction } from "mobx";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FB_COLLECTION_SET, setStore } from "entities/set";
import { auth, db } from "shared";

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
