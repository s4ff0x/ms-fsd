import { userStore } from "entities/user";
import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "pages/home/ui";
import { CreateSetPage } from "pages/set/create-set-page";
import { UpdateSetPage } from "pages/set/update-set-page";
import { CreateCategoryPage } from "pages/category/create-category-page";
import { UpdateCategoryPage } from "pages/category/update-category-page";
import { getSignInRoute, SignInPage } from "pages/auth/sign-in-page";
import { getSignUpRoute, SignUpPage } from "pages/auth/sign-up-page";
import { IonReactRouter } from "@ionic/react-router";
import { observer } from "mobx-react-lite";
import { getSetRouteCreate, getSetRouteUpdate } from "entities/set";
import { getHomeRoute } from "pages/home";
import {
  getCategoryCreateRoute,
  getCategoryUpdateRoute,
} from "entities/category";
import { getSignOutRoute } from "features/auth";

export default observer(() => {
  return (
    <IonReactRouter>
      {userStore.shouldShowUserContent() && (
        <IonRouterOutlet>
          <Route exact path={getHomeRoute()}>
            <Home />
          </Route>

          {/*Set*/}
          <Route exact path={getSetRouteCreate()}>
            <CreateSetPage />
          </Route>
          <Route exact path={getSetRouteUpdate()}>
            <UpdateSetPage />
          </Route>

          {/*Category*/}
          <Route exact path={getCategoryCreateRoute()}>
            <CreateCategoryPage />
          </Route>
          <Route exact path={getCategoryUpdateRoute()}>
            <UpdateCategoryPage />
          </Route>

          <Route exact path={["/", getSignInRoute(), getSignOutRoute()]}>
            <Redirect to={getHomeRoute()} />
          </Route>
        </IonRouterOutlet>
      )}
      {userStore.shouldShowAuth() && (
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
    </IonReactRouter>
  );
});
