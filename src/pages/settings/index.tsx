import { IonPage, IonRouterOutlet } from "@ionic/react";
import React from "react";
import { SignOut } from "features/auth";
import { Layout } from "shared/ui";

export const SettingsRouter: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Layout title={"Settings"}>
          <SignOut />
        </Layout>
      </IonRouterOutlet>
    </IonPage>
  );
};
