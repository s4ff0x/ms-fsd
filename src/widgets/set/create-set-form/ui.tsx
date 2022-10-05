import { IonButton, IonInput } from "@ionic/react";
import { useState } from "react";
import { useCreateSet } from "features/set/create-set";
import { TermEditor } from "features/set/term-editor";
import { ITerm } from "entities/set";

export const CreateSetForm = () => {
  const [name, setName] = useState("");
  const [terms, setTerms] = useState<ITerm[]>([]);
  const createSet = useCreateSet();
  return (
    <div>
      <h1>Name</h1>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <h3>terms</h3>
      <TermEditor terms={terms} setTerms={setTerms} />
      <IonButton onClick={() => createSet({ name, terms })}>
        Create set
      </IonButton>
    </div>
  );
};
