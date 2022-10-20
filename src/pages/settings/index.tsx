import { IonPage, IonRouterOutlet } from "@ionic/react";
import React from "react";
import { SignOut } from "features/auth";
import { UserInfo } from "entities/user";
import { getUserData } from "shared/api";
import { Layout } from "shared/ui";

export const SettingsRouter: React.FC = () => {
  const { email, photoURL, displayName } = getUserData();
  return (
    <IonPage>
      <IonRouterOutlet>
        <Layout title={"Profile settings"}>
          <UserInfo
            email={email}
            photoURL={photoURL}
            displayName={displayName}
          />
          <SignOut />
        </Layout>
      </IonRouterOutlet>
    </IonPage>
  );
};
