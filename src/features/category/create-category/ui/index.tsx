import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { createCategory } from "features/category/create-category/model";

export const CreateCategory = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <IonButton onClick={() => createCategory({ name, setIds: [] })}>
        Create set
      </IonButton>
    </div>
  );
};
