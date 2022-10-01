import { IonButton } from "@ionic/react";
import { useSignOut } from "./model";

export const SignOut = () => {
  const { signOut } = useSignOut();
  return <IonButton onClick={signOut}>Sign out</IonButton>;
};
