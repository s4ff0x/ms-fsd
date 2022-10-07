import { useEffect } from "react";
import { auth, onAuthStateChanged, User } from "shared/api";
import { userStore } from "./store";

export const useUserWatcher = () => {
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (userCredential: User | null) => {
        if (userCredential) {
          const { uid, email, displayName } = userCredential;
          userStore.updateUser({
            uid,
            email,
            displayName,
          });
        } else {
          userStore.updateUser(null);
          console.log("Unauthenticated user");
        }
        userStore.updateLoading(false);
      },
      console.error
    );
  }, []);
};
