import { useEffect } from "react";
import { userStore } from "entities/user";
import { auth, onAuthStateChanged, User } from "shared/api";

export const useAuthWatcher = () => {
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
