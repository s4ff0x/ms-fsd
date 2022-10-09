import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
} from "@ionic/react";

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
import "app/styles/global.scss";

import { homeOutline, settingsOutline } from "ionicons/icons";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";

import { Redirect, Route } from "react-router-dom";
import { AuthRouter } from "app/auth-router";
import { HomeRouter } from "app/home-router";
import { SettingsRouter } from "pages/settings";
import { ActionCreateNew } from "features/action-create-new";
import { categoryStore } from "entities/category";
import {
  HOME_ROUTE,
  SETTINGS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_OUT_ROUTE,
  SIGN_UP_ROUTE,
} from "entities/router";
import { setStore } from "entities/set";
import { userStore, useUserWatcher } from "entities/user";
import { updateStoreVisualizer } from "shared/lib/store-visualizer";
import { TabsStyled } from "shared/ui";

setupIonicReact();

autorun(() => {
  updateStoreVisualizer([
    { label: "UserStore", data: { ...userStore } },
    { label: "SetStore", data: { ...setStore } },
    { label: "CategoryStore", data: { ...categoryStore } },
  ]);
});

const App: React.FC = observer(() => {
  useUserWatcher();

  return (
    <IonApp>
      {userStore.shouldShowUserContent && (
        <TabsStyled>
          <IonRouterOutlet>
            <Route path={HOME_ROUTE} component={HomeRouter} />
            <Route path={SETTINGS_ROUTE} component={SettingsRouter} />

            <Route
              exact
              path={["/", SIGN_IN_ROUTE, SIGN_OUT_ROUTE, SIGN_UP_ROUTE]}
            >
              <Redirect to={HOME_ROUTE} />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href={HOME_ROUTE}>
              <IonIcon icon={homeOutline} />
            </IonTabButton>

            <IonTabButton tab="new">
              <ActionCreateNew />
            </IonTabButton>

            <IonTabButton tab="settings" href={SETTINGS_ROUTE}>
              <IonIcon icon={settingsOutline} />
            </IonTabButton>
          </IonTabBar>
        </TabsStyled>
      )}
      {userStore.shouldShowAuth && <AuthRouter />}
    </IonApp>
  );
});

export default App;
