import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { SignInEmail } from "features/auth";

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
