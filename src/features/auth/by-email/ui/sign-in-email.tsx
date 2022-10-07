import { IonInput, IonItem } from "@ionic/react";
import { useRef } from "react";
import { signInEmailPass } from "../model";

export const useSignInEmail = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  return {
    signInEmailHandler: () =>
      signInEmailPass(emailRef.current, passRef.current),
    signInEmail: (
      <>
        <IonItem>
          <IonInput
            placeholder={"email"}
            onIonChange={(e: CustomEvent) =>
              (emailRef.current = e.detail.value)
            }
          />
        </IonItem>
        <IonItem>
          <IonInput
            placeholder={"password"}
            type={"password"}
            onIonChange={(e: CustomEvent) => (passRef.current = e.detail.value)}
          />
        </IonItem>
      </>
    ),
  };
};
