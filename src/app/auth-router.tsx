import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "pages/auth";
import {
  HOME_ROUTE,
  SETTINGS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
} from "entities/router";

export const AuthRouter = () => {
  return (
    <IonRouterOutlet>
      <Route exact path={SIGN_IN_ROUTE}>
        <SignInPage />
      </Route>
      <Route exact path={SIGN_UP_ROUTE}>
        <SignUpPage />
      </Route>
      <Route exact path={["/", HOME_ROUTE, SETTINGS_ROUTE]}>
        <Redirect to={SIGN_IN_ROUTE} />
      </Route>
    </IonRouterOutlet>
  );
};
