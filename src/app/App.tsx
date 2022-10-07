import { IonApp, setupIonicReact } from "@ionic/react";

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
import "app/theme/global.scss";

import { observer } from "mobx-react-lite";

import Router from "app/router";

import { categoryStore } from "entities/category";
import { setStore } from "entities/set";
import { userStore, useUserWatcher } from "entities/user";
import { initLogger } from "shared/lib";

setupIonicReact();

initLogger([
  { label: "UserStore", data: userStore },
  { label: "SetStore", data: setStore },
  { label: "CategoryStore", data: categoryStore },
]);

const App: React.FC = observer(() => {
  useUserWatcher();

  return (
    <IonApp>
      <Router />
    </IonApp>
  );
});

export default App;
