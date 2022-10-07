import { IonInput } from "@ionic/react";
import { useState } from "react";
import { TermEditor } from "features/set/term-editor";
import { useUpdateSet } from "features/set/update-set";
import { ISet, ITerm } from "entities/set";
import { ButtonStyled } from "shared";

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
      <ButtonStyled onClick={() => updateSet({ name, terms }, set.uid)}>
        Update set
      </ButtonStyled>
      <ButtonStyled onClick={() => deleteSet(set.uid)}>Delete set</ButtonStyled>
    </div>
  );
};
