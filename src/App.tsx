import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./app/theme/variables.css";
import { observer } from "mobx-react-lite";
import { userStore } from "entities/user";
import { SignInPage } from "pages/auth/sign-in-page/sign-in-page";
import { SignUpPage } from "pages/auth/sign-up-page/sign-up-page";
import { useAuthWatcher } from "features/auth";
import Home from "pages/home/home";
import { UpdateSetPage } from "pages/set/update-set-page";
import { CreateSetPage } from "pages/set/create-set-page";

setupIonicReact();

const App: React.FC = observer(() => {
  useAuthWatcher();

  return (
    <IonApp>
      <IonReactRouter>
        {userStore.shouldShowUserContent() && (
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/set/create">
              <CreateSetPage />
            </Route>
            <Route
              exact
              path={`/set/edit/:setId`}
              render={() => <UpdateSetPage />}
            />
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
    </IonApp>
  );
});

export default App;
