import React from "react";
import { useHistory } from "react-router";
import { useSignUpEmail } from "features/auth";
import {
  AuthBottomBlockStyled,
  AuthFlexLayout,
  AuthNavBlock,
  getSignInRoute,
} from "entities/auth";
import { ButtonStyled, Layout, TitledBlock } from "shared";

export const SignUpPage = () => {
  const { signUpEmail, signUpEmailHandler } = useSignUpEmail();
  const history = useHistory();
  return (
    <Layout>
      <AuthFlexLayout>
        <TitledBlock
          title={"Want to join"}
          subTitle={"Please fill in the form"}
        >
          {signUpEmail}
        </TitledBlock>
        <AuthBottomBlockStyled>
          <ButtonStyled onClick={signUpEmailHandler}>{"Sign up"}</ButtonStyled>
          <AuthNavBlock
            text={"Already have an account?"}
            linkText={"Sign in"}
            linkHandler={() => history.push(getSignInRoute())}
          />
        </AuthBottomBlockStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
