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
import "app/theme/variables.css";
import { observer } from "mobx-react-lite";

import { useAuthWatcher } from "features/auth";

import Router from "app/router";
import { autorun, toJS } from "mobx";
import { userStore } from "entities/user";
import { setStore } from "entities/set";
import { categoryStore } from "entities/category";

setupIonicReact();

autorun(() => {
  console.log(
    "\n UserStore:",
    toJS(userStore),
    "\n SetStore:",
    toJS(setStore),
    "\n CategoryStore:",
    toJS(categoryStore)
  );
});

const App: React.FC = observer(() => {
  useAuthWatcher();

  return (
    <IonApp>
      <Router />
    </IonApp>
  );
});

export default App;
