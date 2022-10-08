import { useCallback } from "react";
import styled from "styled-components";
import { TermCardEditable, TermList } from "entities/set";
import { ButtonStyled } from "shared/ui";
import { ITermEditorProps } from "./lib";
import { onAddTerm, onChange, onDelete } from "./model";

export const TermEditorStyled = styled.div`
  > ${ButtonStyled} {
    margin-top: 1rem;
  }
`;

export const TermEditor = ({ terms, setTerms }: ITermEditorProps) => {
  const onAddTermHandler = useCallback(() => {
    onAddTerm(terms, setTerms);
  }, [setTerms, terms]);

  return (
    <TermEditorStyled>
      <TermList>
        {terms.map((el) => (
          <TermCardEditable
            {...el}
            key={el.uid}
            onChange={(term, definition) =>
              onChange(terms, setTerms, el.uid, term, definition)
            }
            onDelete={() => onDelete(terms, setTerms, el.uid)}
          />
        ))}
      </TermList>
      <ButtonStyled onClick={onAddTermHandler} small square outline>
        Add term
      </ButtonStyled>
    </TermEditorStyled>
  );
};
