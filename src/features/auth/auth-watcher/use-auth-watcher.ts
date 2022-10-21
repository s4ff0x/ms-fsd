import { useEffect } from "react";
import { useHistory } from "react-router";
import { userStore } from "entities/user";
import { auth, onAuthStateChanged, User } from "shared/api";

export const useAuthWatcher = () => {
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
          const { uid, email, displayName, photoURL } = userCredential;
          userStore.updateUser({
            uid,
            email,
            displayName,
            photoURL,
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
