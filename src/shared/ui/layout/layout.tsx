import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactNode } from "react";
import { LayoutContentStyled } from "./layout.styles";

export const Layout = ({
  children,
  title,
  withBackButton = false,
}: {
  children: ReactNode;
  title?: string;
  withBackButton?: boolean;
}) => {
  return (
    <IonPage>
      {title && (
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            {withBackButton && (
              <IonButtons slot="start">
                <IonBackButton text={"Back"} />
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
      )}
      <LayoutContentStyled fullscreen>{children}</LayoutContentStyled>
    </IonPage>
  );
};
