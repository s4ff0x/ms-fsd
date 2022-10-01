import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { ISet } from "entities/set";
import { useUpdateSet } from "../model";

export const UpdateSet = ({ set }: { set: ISet }) => {
  const [name, setName] = useState(set.name);
  const { updateSet, deleteSet } = useUpdateSet();
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <IonButton onClick={() => updateSet({ name, terms: [] }, set.uid)}>
        Update set
      </IonButton>
      <IonButton onClick={() => deleteSet(set.uid)}>Delete set</IonButton>
    </div>
  );
};
