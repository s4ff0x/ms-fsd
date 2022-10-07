import { IonInput, IonItem } from "@ionic/react";
import { useRef } from "react";
import { signUpEmailPass } from "../model";

export const useSignUpEmail = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  return {
    signUpEmailHandler: () =>
      signUpEmailPass(emailRef.current, passRef.current),
    signUpEmail: (
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
