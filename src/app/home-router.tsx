import { IonPage, IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router-dom";
import { CreateCategoryPage, UpdateCategoryPage } from "pages/category";
import { HomePage } from "pages/home";
import { CreateSetPage, UpdateSetPage } from "pages/set";
import { useCategoryWatcher } from "entities/category";
import {
  CATEGORY_CREATE_ROUTE,
  CATEGORY_UPDATE_ROUTE,
  HOME_ROUTE,
  SET_ROUTE_CREATE,
  SET_ROUTE_UPDATE,
} from "entities/router";
import { useSetWatcher } from "entities/set";

export const HomeRouter = () => {
  useSetWatcher();
  useCategoryWatcher();

  return (
    <IonPage>
      <IonRouterOutlet>
        {/* Home */}
        <Route exact path={HOME_ROUTE}>
          <HomePage />
        </Route>

        {/* Set */}
        <Route exact path={SET_ROUTE_CREATE}>
          <CreateSetPage />
        </Route>
        <Route exact path={SET_ROUTE_UPDATE}>
          <UpdateSetPage />
        </Route>

        {/* Category */}
        <Route exact path={CATEGORY_CREATE_ROUTE}>
          <CreateCategoryPage />
        </Route>
        <Route exact path={CATEGORY_UPDATE_ROUTE}>
          <UpdateCategoryPage />
        </Route>
      </IonRouterOutlet>
    </IonPage>
  );
};
