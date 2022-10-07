import { useHistory } from "react-router";
import { userStore } from "entities/user";
import { auth, signOut as signOutFB } from "shared/api";

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
