import { ITerm } from "../lib";
import { TermCard } from "./term-card";
import { TermCardEditable } from "./term-card-editable";

export const TermList = ({
  terms,
  TermComponent,
}: {
  terms: ITerm[];
  TermComponent: typeof TermCard | typeof TermCardEditable;
}) => {
  return (
    <div>
      {terms.map((term) => {
        return (
          <TermComponent
            key={term.uid}
            uid={term.uid}
            term={term.term}
            definition={term.definition}
          />
        );
      })}
    </div>
  );
};
