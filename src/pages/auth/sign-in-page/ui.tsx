import React from "react";
import { useSignInEmail } from "features/auth";
import { AuthFlexLayout } from "entities/auth";
import { ButtonStyled, Layout, TitledBlock } from "shared";

export const SignInPage = () => {
  const { signInEmail, signInEmailHandler } = useSignInEmail();
  return (
    <Layout>
      <AuthFlexLayout>
        <TitledBlock title={"Hey, you"} subTitle={"Ready for studying?"}>
          {signInEmail}
        </TitledBlock>
        <ButtonStyled onClick={signInEmailHandler}>Sign in</ButtonStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
