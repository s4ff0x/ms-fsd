import { useState } from "react";
import { useCreateSet } from "features/set/create-set";
import { TermEditor } from "features/set/term-editor";
import { ITerm } from "entities/set";
import { ButtonStyled, Input } from "shared/ui";

export const CreateSetForm = () => {
  const [name, setName] = useState("");
  const [terms, setTerms] = useState<ITerm[]>([]);

  const resetForm = () => {
    setName("");
    setTerms([]);
  };

  const createSet = useCreateSet(resetForm);

  return (
    <div>
      <Input
        inputProps={{
          value: name,
          type: "text",
          placeholder: "name",
          onIonChange: (e: CustomEvent) => setName(e.detail.value),
        }}
      >
        Name
      </Input>
      <h3>terms</h3>
      <TermEditor terms={terms} setTerms={setTerms} />
      <ButtonStyled onClick={() => createSet({ name, terms })}>
        Create set
      </ButtonStyled>
    </div>
  );
};
