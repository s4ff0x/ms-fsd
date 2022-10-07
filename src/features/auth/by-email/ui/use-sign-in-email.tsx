import { useRef } from "react";
import { Input } from "shared/ui";
import { signInEmailPass } from "../model";

export const useSignInEmail = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  return {
    signInEmailHandler: () =>
      signInEmailPass(emailRef.current, passRef.current),
    signInEmail: (
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
