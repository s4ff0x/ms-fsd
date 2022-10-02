import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { useCreateSet } from "../model";

export const CreateSet = () => {
  const [name, setName] = useState("");
  const createSet = useCreateSet();
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <IonButton onClick={() => createSet({ name, terms: [] })}>
        Create set
      </IonButton>
    </div>
  );
};
