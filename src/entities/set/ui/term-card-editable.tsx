import { IonInput } from "@ionic/react";
import { ITermEditable } from "../";

export const TermCardEditable = ({
  term,
  definition,
  onChange = () => {},
  onDelete = () => {},
}: ITermEditable) => {
  return (
    <div>
      <button onClick={onDelete}>Delete</button>
      <IonInput
        type="text"
        placeholder={"term"}
        onIonChange={(e: CustomEvent) => onChange(e.detail.value, definition)}
        value={term}
      />
      <IonInput
        type="text"
        placeholder={"definition"}
        onIonChange={(e: CustomEvent) => onChange(term, e.detail.value)}
        value={definition}
      />
    </div>
  );
};
