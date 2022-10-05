import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useRef } from "react";
import { signUpEmailPass } from "../model";

export const SignUpEmail = () => {
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
        onClick={() => signUpEmailPass(emailRef.current, passRef.current)}
      >
        Sign up
      </IonButton>
    </>
  );
};
