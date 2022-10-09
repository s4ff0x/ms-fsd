import { IonRouterOutlet } from "@ionic/react";
import { observer } from "mobx-react-lite";
import { Redirect, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "pages/auth";
import { CreateCategoryPage, UpdateCategoryPage } from "pages/category";
import { Home } from "pages/home";
import { CreateSetPage, UpdateSetPage } from "pages/set";

import {
  getCategoryCreateRoute,
  getCategoryUpdateRoute,
  getHomeRoute,
  getSetRouteCreate,
  getSetRouteUpdate,
  getSignInRoute,
  getSignOutRoute,
  getSignUpRoute,
} from "entities/router";
import { userStore } from "entities/user";

export default observer(() => {
  return (
    <>
      {userStore.shouldShowUserContent && (
        <IonRouterOutlet>
          {/* Home */}
          <Route exact path={getHomeRoute()}>
            <Home />
          </Route>

          {/* Set */}
          <Route exact path={getSetRouteCreate()}>
            <CreateSetPage />
          </Route>
          <Route exact path={getSetRouteUpdate()}>
            <UpdateSetPage />
          </Route>

          {/* Category */}
          <Route exact path={getCategoryCreateRoute()}>
            <CreateCategoryPage />
          </Route>
          <Route exact path={getCategoryUpdateRoute()}>
            <UpdateCategoryPage />
          </Route>

          {/* Redirect */}
          <Route exact path={["/", getSignInRoute(), getSignOutRoute()]}>
            <Redirect to={getHomeRoute()} />
          </Route>
        </IonRouterOutlet>
      )}
      {userStore.shouldShowAuth && (
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
      )}
    </>
  );
});
