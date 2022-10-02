import { useState } from "react";
import { IonButton, IonInput } from "@ionic/react";
import { ISet, ITerm } from "entities/set";
import { useUpdateSet } from "features/set/update-set";
import { TermEditor } from "features/set/term-editor";

export const UpdateSetForm = ({ set }: { set: ISet }) => {
  const [name, setName] = useState(set.name);
  const [terms, setTerms] = useState<ITerm[]>(set.terms);
  const { updateSet, deleteSet } = useUpdateSet();
  return (
    <div>
      <h1>Name</h1>
      <IonInput
        value={name}
        type="text"
        placeholder={"name"}
        onIonChange={(e: CustomEvent) => setName(e.detail.value)}
      />
      <h3>Terms</h3>
      <TermEditor terms={terms} setTerms={setTerms} />
      <IonButton onClick={() => updateSet({ name, terms }, set.uid)}>
        Update set
      </IonButton>
      <IonButton onClick={() => deleteSet(set.uid)}>Delete set</IonButton>
    </div>
  );
};
