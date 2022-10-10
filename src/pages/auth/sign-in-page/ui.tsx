import React from "react";
import {
  AuthBottomBlockStyled,
  AuthFlexLayout,
  AuthNavBlock,
  useSignInEmail,
} from "features/auth";
import { SIGN_UP_ROUTE } from "entities/router";
import { ButtonStyled, Layout, TitledBlock } from "shared/ui";

export const SignInPage = () => {
  const { signInEmail, signInEmailHandler } = useSignInEmail();
  return (
    <Layout>
      <AuthFlexLayout>
        <TitledBlock title={"Hey, you"} subTitle={"Just a few things..."}>
          {signInEmail}
        </TitledBlock>
        <AuthBottomBlockStyled>
          <ButtonStyled onClick={signInEmailHandler}>{"Sign in"}</ButtonStyled>
          <AuthNavBlock
            text={"Don't have an account?"}
            linkText={"Sign up"}
            linkRoute={SIGN_UP_ROUTE}
          />
        </AuthBottomBlockStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
