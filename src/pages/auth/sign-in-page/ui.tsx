import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { SignInEmail } from "features/auth";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <Link to="/sign-up">Sign up</Link>
        </IonItem>
        <SignInEmail />
      </IonContent>
    </IonPage>
  );
};
