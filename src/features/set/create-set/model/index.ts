import { entityCreator, FB_COLLECTIONS } from "shared";
import { ISetForCreation } from "entities/set";
import { useHistory } from "react-router";

export const useCreateSet = () => {
  const history = useHistory();
  return entityCreator<ISetForCreation>(FB_COLLECTIONS.SETS, () => {
    history.push("/home");
  });
};
