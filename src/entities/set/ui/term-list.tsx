import { EMPTY_SET_TITLE } from "../";
import { ITerm } from "../";
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
      {terms.length
        ? terms.map((term) => {
            return (
              <TermComponent
                key={term.uid}
                uid={term.uid}
                term={term.term}
                definition={term.definition}
              />
            );
          })
        : EMPTY_SET_TITLE}
    </div>
  );
};
