import { ButtonStyled } from "shared/ui";
import { useSignOut } from "./model";

export const SignOut = () => {
  const { signOut } = useSignOut();
  return <ButtonStyled onClick={signOut}>Sign out</ButtonStyled>;
};
