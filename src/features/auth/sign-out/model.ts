import { auth } from "entities/firebase";
import { signOut as signOutFB } from "firebase/auth";
import { userStore } from "entities/user";
import { useHistory } from "react-router";

export const useSignOut = () => {
  const history = useHistory();
  return {
    signOut: async () => {
      await signOutFB(auth);
      userStore.updateUser(null);
      history.push("/sign-in");
    },
  };
};
