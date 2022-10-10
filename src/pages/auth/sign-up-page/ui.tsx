import React from "react";
import {
  useSignUpEmail,
  AuthFlexLayout,
  AuthNavBlock,
  AuthBottomBlockStyled,
} from "features/auth";

import { SIGN_IN_ROUTE } from "entities/router";
import { ButtonStyled, Layout, TitledBlock } from "shared/ui";

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
        <AuthBottomBlockStyled>
          <ButtonStyled onClick={signUpEmailHandler}>{"Sign up"}</ButtonStyled>
          <AuthNavBlock
            text={"Already have an account?"}
            linkText={"Sign in"}
            linkRoute={SIGN_IN_ROUTE}
          />
        </AuthBottomBlockStyled>
      </AuthFlexLayout>
    </Layout>
  );
};
