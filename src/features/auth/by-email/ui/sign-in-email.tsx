import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useRef } from "react";
import { signInEmailPass } from "../model";

export const SignInEmail = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  return (
    <>
      <IonItem>
        <IonInput
          placeholder={"email"}
          onIonChange={(e: CustomEvent) => (emailRef.current = e.detail.value)}
        />
      </IonItem>
      <IonItem>
        <IonInput
          placeholder={"password"}
          type={"password"}
          onIonChange={(e: CustomEvent) => (passRef.current = e.detail.value)}
        />
      </IonItem>
      <IonButton
        onClick={() => signInEmailPass(emailRef.current, passRef.current)}
      >
        Sign in
      </IonButton>
    </>
  );
};
