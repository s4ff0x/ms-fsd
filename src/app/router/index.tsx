import { userStore } from "entities/user";
import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "pages/home/home";
import { CreateSetPage } from "pages/set/create-set-page";
import { UpdateSetPage } from "pages/set/update-set-page";
import { CreateCategoryPage } from "pages/category/create-category-page";
import { UpdateCategoryPage } from "pages/category/update-category-page";
import { SignInPage } from "pages/auth/sign-in-page/sign-in-page";
import { SignUpPage } from "pages/auth/sign-up-page/sign-up-page";
import { IonReactRouter } from "@ionic/react-router";
import { observer } from "mobx-react-lite";

export default observer(() => {
  return (
    <IonReactRouter>
      {userStore.shouldShowUserContent() && (
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/set/create">
            <CreateSetPage />
          </Route>

          <Route exact path={`/set/edit/:setId`}>
            <UpdateSetPage />
          </Route>

          <Route exact path="/category/create">
            <CreateCategoryPage />
          </Route>
          <Route exact path={`/category/edit/:categoryId`}>
            <UpdateCategoryPage />
          </Route>
          <Route exact path={["/", "/sign-in", "/sign-out"]}>
            <Redirect to={"/home"} />
          </Route>
        </IonRouterOutlet>
      )}
      {userStore.shouldShowAuth() && (
        <IonRouterOutlet>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <Route exact path={["/", "/home"]}>
            <Redirect to={"/sign-in"} />
          </Route>
        </IonRouterOutlet>
      )}
    </IonReactRouter>
  );
});
