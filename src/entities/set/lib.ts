import { uid } from "shared";

export interface ITerm {
  id: string;
  terms: string;
  definition: string;
}

export interface ISet {
  uid: string;
  name: string;
  terms: ITerm[];
  userId: string;
  createdAt: number;
  updatedAt: number;
}

export interface ISetForCreation {
  name: string;
  terms: ITerm[];
}

export const deleteSet = (setId: string, sets: ISet[]) => {
  return sets.filter((set) => set.uid !== setId);
};

export const userIsOwner = (userId: string, set: ISet) => {
  return set.userId === userId;
};

export const getBlankTerm = () => ({
  term: "",
  definition: "",
  uid: uid(),
});
