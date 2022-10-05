import { IonButton } from "@ionic/react";
import { TermCardEditable } from "entities/set";
import { ITermEditorProps } from "./lib";
import { onAddTerm, onChange, onDelete } from "./model";

export const TermEditor = ({ terms, setTerms }: ITermEditorProps) => {
  return (
    <div>
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
      <IonButton onClick={() => onAddTerm(terms, setTerms)}>Add term</IonButton>
    </div>
  );
};
