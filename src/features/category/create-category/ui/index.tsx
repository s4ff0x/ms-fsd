import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { useCreateCategory } from "../model";

export const CreateCategory = () => {
  const [name, setName] = useState("");
  const createCategory = useCreateCategory();
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <IonButton onClick={() => createCategory({ name, setIds: [] })}>
        Create category
      </IonButton>
    </div>
  );
};
