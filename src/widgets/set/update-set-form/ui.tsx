import { useState } from "react";
import styled from "styled-components";
import { TermEditor } from "features/set/term-editor";
import { useUpdateSet } from "features/set/update-set";
import { ISet, ITerm } from "entities/set";
import { ButtonStyled, Input } from "shared/ui";

export const UpdateSetFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > ${ButtonStyled} {
    width: auto;
    margin-right: auto;
  }
`;

export const UpdateSetForm = ({ set }: { set: ISet }) => {
  const [name, setName] = useState(set.name);
  const [terms, setTerms] = useState<ITerm[]>(set.terms);

  const resetForm = () => {
    setName("");
    setTerms([]);
  };

  const { updateSet, deleteSet } = useUpdateSet(resetForm);

  return (
    <UpdateSetFormStyled>
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
      <TermEditor terms={terms} setTerms={setTerms} />
      <ButtonStyled onClick={() => updateSet({ name, terms }, set.uid)}>
        Update set
      </ButtonStyled>
      <ButtonStyled onClick={() => deleteSet(set.uid)} red>
        Delete set
      </ButtonStyled>
    </UpdateSetFormStyled>
  );
};
