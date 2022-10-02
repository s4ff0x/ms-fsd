import { getNewTerm, ITerm } from "entities/set";

export const onChange = (
  terms: ITerm[],
  setTerms: (terms: ITerm[]) => void,
  uid: string,
  term?: string,
  definition?: string
) => {
  // TODO: should it be inside entity logic?
  setTerms(
    terms.map((el) => {
      if (el.uid === uid)
        return {
          ...el,
          term: term ?? el.term,
          definition: definition ?? el.definition,
        };
      return el;
    })
  );
};

export const onAddTerm = (
  terms: ITerm[],
  setTerms: (terms: ITerm[]) => void
) => {
  setTerms([...terms, getNewTerm()]);
};

export const onDelete = (
  terms: ITerm[],
  setTerms: (terms: ITerm[]) => void,
  uid: string
) => {
  setTerms(terms.filter((term) => term.uid !== uid));
};
