import { useEffect } from "react";
import { useHistory } from "react-router";
import { auth, onAuthStateChanged, User } from "shared/api";
import { userStore } from "./store";

export const useUserWatcher = () => {
  const history = useHistory();

  // TODO: improve it (how to manage redirects from unknown page in Ionic?)
  useEffect(() => {
    history.push("/");
  }, [history]);

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
