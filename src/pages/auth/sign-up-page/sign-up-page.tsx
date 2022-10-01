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
import { SignUpEmail } from "features/auth";

export const SignUpPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <Link to="/sign-in">Sign in</Link>
        </IonItem>
        <SignUpEmail />
      </IonContent>
    </IonPage>
  );
};
