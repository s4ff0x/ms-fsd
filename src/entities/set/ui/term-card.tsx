import { ITerm } from "../";

export const TermCard = ({ term, definition }: ITerm) => {
  return (
    <div>
      <div>Term: {term}</div>
      <div>Definition: {definition}</div>
    </div>
  );
};
