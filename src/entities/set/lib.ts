import { uid } from "shared/lib/common";
import { ITerm } from "./model";

export const getNewTerm = () => ({
  term: "",
  definition: "",
  uid: uid(),
  confidence: 0,
  isInitial: true,
});

export const isLearned = (confidence: number) => confidence >= 35;
export const isMediocre = (confidence: number, isInitial: boolean) =>
  confidence < 35 && confidence > -30 && !isInitial;
export const isCompromised = (confidence: number) => confidence <= -30;
export const isUntouched = (isInitial: boolean) => isInitial;
export const isNew = (confidence: number, isInitial: boolean) =>
  !isLearned(confidence) &&
  !isMediocre(confidence, isInitial) &&
  !isCompromised(confidence) &&
  !isUntouched(isInitial);

export const calcStudyGroups = (terms: ITerm[]) => {
  if (!Array.isArray(terms)) return {};
  const total = terms?.length;
  const learned = terms?.filter((el) => isLearned(el.confidence)).length;
  const mediocre = terms?.filter((el) =>
    isMediocre(el.confidence, el.isInitial)
  ).length;
  const compromised = terms?.filter((el) =>
    isCompromised(el.confidence)
  ).length;
  const untouched = terms?.filter((el) => el.isInitial).length;

  const calcPercentage = (group: number) =>
    Math.round((group / terms.length) * 100);

  return {
    total,
    learned,
    mediocre,
    compromised,
    untouched,
    learnedPercentage: calcPercentage(learned),
    mediocrePercentage: calcPercentage(mediocre),
    compromisedPercentage: calcPercentage(compromised),
    untouchedPercentage: calcPercentage(untouched),
  };
};

export const getTermColor = (
  confidence: number,
  isInitial: boolean
): string => {
  let color = "";
  if (isCompromised(confidence)) color = "var(--red)";
  if (isMediocre(confidence, isInitial)) color = "var(--yellow)";
  if (isLearned(confidence)) color = "var(--accent)";
  if (isInitial) color = "var(--white30)";
  return color;
};
