import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactNode } from "react";

export const Layout = ({
  children,
  title,
  withBackButton = false,
}: {
  children: ReactNode;
  title: string;
  withBackButton?: boolean;
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {withBackButton && (
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" text={"Back"} />
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: 20 }}>{children}</div>
      </IonContent>
    </IonPage>
  );
};
