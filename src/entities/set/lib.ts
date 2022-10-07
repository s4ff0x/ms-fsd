import { uid } from "shared/lib";

export const getNewTerm = () => ({
  term: "",
  definition: "",
  uid: uid(),
});
