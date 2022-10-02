import { FB_COLLECTION_SET, ISetForCreation } from "entities/set";
import { useHistory } from "react-router";
import { getCurrentUserUID } from "entities/user";
import { entityCreator } from "entities/entity-manager";

export const useCreateSet = () => {
  const history = useHistory();
  return entityCreator<ISetForCreation>(
    FB_COLLECTION_SET,
    getCurrentUserUID(),
    () => {
      history.push("/home");
    }
  );
};
