import { useRef } from "react";
import { Input } from "shared/ui";
import { signUpEmailPass } from "../model";

export const useSignUpEmail = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  return {
    signUpEmailHandler: () =>
      signUpEmailPass(emailRef.current, passRef.current),
    signUpEmail: (
      <>
        <Input
          inputProps={{
            placeholder: "email",
            onIonChange: (e: CustomEvent) =>
              (emailRef.current = e.detail.value),
          }}
        >
          Email
        </Input>
        <Input
          inputProps={{
            placeholder: "password",
            type: "password",
            onIonChange: (e: CustomEvent) => (passRef.current = e.detail.value),
          }}
        >
          Password
        </Input>
      </>
    ),
  };
};
