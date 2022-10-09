import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { CreateCategoryPage, UpdateCategoryPage } from "pages/category";
import { Home } from "pages/home";
import { CreateSetPage, UpdateSetPage } from "pages/set";
import { useCategoryWatcher } from "entities/category";
import {
  getCategoryCreateRoute,
  getCategoryUpdateRoute,
  getHomeRoute,
  getSetRouteCreate,
  getSetRouteUpdate,
  getSignInRoute,
  getSignOutRoute,
} from "entities/router";
import { useSetWatcher } from "entities/set";

export const HomeContainer = () => {
  useSetWatcher();
  useCategoryWatcher();

  return (
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
  );
};
