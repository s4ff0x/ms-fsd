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

export const EMPTY_SET_TITLE = "There are no terms";
export const EMPTY_SET_LIST_TITLE = "There are no sets";

export const SET_ROUTE = "/set";
export const getSetRouteUpdateDynamic = (uid: string) =>
  `${SET_ROUTE}/update/${uid}`;
export const getSetRouteUpdate = () => `${SET_ROUTE}/update/:setId`;
export const getSetRouteCreate = () => `${SET_ROUTE}/create`;
