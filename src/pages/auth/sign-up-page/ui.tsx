import React from "react";
import { useSignUpEmail } from "features/auth";
import { AuthFlexLayout } from "entities/auth";
import { ButtonStyled, Layout, TitledBlock } from "shared";

export const SignUpPage = () => {
  const { signUpEmail, signUpEmailHandler } = useSignUpEmail();
  return (
    <Layout>
      <AuthFlexLayout>
        <TitledBlock
          title={"Want to join"}
          subTitle={"Please fill in the form"}
        >
          {signUpEmail}
        </TitledBlock>
        <ButtonStyled onClick={signUpEmailHandler}>Sign up</ButtonStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
