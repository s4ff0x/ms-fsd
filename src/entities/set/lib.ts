import { uid } from "shared";

export const getNewTerm = () => ({
  term: "",
  definition: "",
  uid: uid(),
});
