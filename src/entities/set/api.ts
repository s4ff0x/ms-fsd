import { uid } from "shared";

export const getNewTerm = () => ({
  term: "",
  definition: "",
  uid: uid(),
});

export const SET_ROUTE = "/set";
export const getSetRouteUpdateDynamic = (uid: string) =>
  `${SET_ROUTE}/update/${uid}`;
export const getSetRouteUpdate = () => `${SET_ROUTE}/update/:setId`;
export const getSetRouteCreate = () => `${SET_ROUTE}/create`;

export const FB_COLLECTION_SET = "sets";
