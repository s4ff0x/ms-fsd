import { IonButton, IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { useActionSheet } from "./model";

export const ActionCreateNew = () => {
  const showActionSheet = useActionSheet();
  return (
    <IonButton onClick={showActionSheet}>
      <IonIcon icon={addOutline} />
    </IonButton>
  );
};
