import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { observer } from "mobx-react-lite";
import { Redirect, Route } from "react-router-dom";
import { getSignInRoute, SignInPage } from "pages/auth/sign-in-page";
import { getSignUpRoute, SignUpPage } from "pages/auth/sign-up-page";
import { CreateCategoryPage } from "pages/category/create-category-page";
import { UpdateCategoryPage } from "pages/category/update-category-page";
import { getHomeRoute } from "pages/home";
import { Home } from "pages/home";
import { CreateSetPage } from "pages/set/create-set-page";
import { UpdateSetPage } from "pages/set/update-set-page";
import { getSignOutRoute } from "features/auth";
import {
  getCategoryCreateRoute,
  getCategoryUpdateRoute,
} from "entities/category";
import { getSetRouteCreate, getSetRouteUpdate } from "entities/set";
import { userStore } from "entities/user";

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
