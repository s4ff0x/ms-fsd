import { ITerm } from "entities/set";

export interface ITermEditorProps {
  terms: ITerm[];
  setTerms(terms: ITerm[]): void;
}
