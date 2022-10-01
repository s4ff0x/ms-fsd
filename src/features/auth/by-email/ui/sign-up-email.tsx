import { IonButton, IonInput, IonItem } from "@ionic/react";
import { signUpEmailPass } from "features/auth/by-email/model";
import { useRef } from "react";

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
