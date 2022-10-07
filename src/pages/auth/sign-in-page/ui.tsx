import React from "react";
import { useHistory } from "react-router";
import { useSignInEmail } from "features/auth";
import {
  AuthBottomBlockStyled,
  AuthFlexLayout,
  AuthNavBlock,
} from "entities/auth";
import { getSignUpRoute } from "entities/router";
import { ButtonStyled, Layout, TitledBlock } from "shared";

export const SignInPage = () => {
  const { signInEmail, signInEmailHandler } = useSignInEmail();
  const history = useHistory();
  return (
    <Layout>
      <AuthFlexLayout>
        <TitledBlock title={"Hey, you"} subTitle={"Ready for studying?"}>
          {signInEmail}
        </TitledBlock>
        <AuthBottomBlockStyled>
          <ButtonStyled onClick={signInEmailHandler}>{"Sign in"}</ButtonStyled>
          <AuthNavBlock
            text={"Don't have an account?"}
            linkText={"Sign up"}
            linkHandler={() => history.push(getSignUpRoute())}
          />
        </AuthBottomBlockStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
