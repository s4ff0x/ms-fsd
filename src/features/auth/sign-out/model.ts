import { signOut as signOutFB } from "firebase/auth";
import { userStore } from "entities/user";
import { useHistory } from "react-router";
import { auth } from "shared";

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
