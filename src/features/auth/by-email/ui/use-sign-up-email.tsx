import { useRef } from "react";
import { Input } from "shared/ui";
import { signUpEmailPass } from "../model";

export const useSignUpEmail = () => {
  const emailRef = useRef("");
  const displayNameRef = useRef("");
  const passRef = useRef("");
  return {
    signUpEmailHandler: () =>
      signUpEmailPass(
        emailRef.current,
        passRef.current,
        displayNameRef.current
      ),
    signUpEmail: (
      <>
        <Input
          inputProps={{
            placeholder: "Display name",
            onIonChange: (e: CustomEvent) =>
              (displayNameRef.current = e.detail.value),
          }}
        >
          Display name
        </Input>
        <Input
          inputProps={{
            placeholder: "Email",
            onIonChange: (e: CustomEvent) =>
              (emailRef.current = e.detail.value),
          }}
        >
          Email
        </Input>
        <Input
          inputProps={{
            placeholder: "Password",
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
