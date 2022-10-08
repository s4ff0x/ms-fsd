import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import React, { ReactNode } from "react";
import { LayoutContentStyled, LayoutToolbarStyled } from "./layout.styles";

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
          <LayoutToolbarStyled>
            <IonTitle>{title}</IonTitle>
            {withBackButton && (
              <IonButtons slot="start">
                <IonBackButton text={"Back"} />
              </IonButtons>
            )}
          </LayoutToolbarStyled>
        </IonHeader>
      )}
      <LayoutContentStyled fullscreen>{children}</LayoutContentStyled>
    </IonPage>
  );
};
