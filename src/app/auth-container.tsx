import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "pages/auth";
import { getHomeRoute, getSignInRoute, getSignUpRoute } from "entities/router";

export const AuthContainer = () => {
  return (
    <IonRouterOutlet>
      <Route exact path={getSignInRoute()}>
        <SignInPage />
      </Route>
      <Route exact path={getSignUpRoute()}>
        <SignUpPage />
      </Route>
      <Route exact path={["/", getHomeRoute()]}>
        <Redirect to={getSignInRoute()} />
      </Route>
    </IonRouterOutlet>
  );
};
