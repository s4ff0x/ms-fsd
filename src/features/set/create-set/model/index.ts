import { useHistory } from "react-router";
import { getCreateAction } from "entities/firebase-entity";
import { FB_COLLECTION_SET, ISetForCreation } from "entities/set";
import { getCurrentUserUID } from "entities/user";

export const useCreateSet = () => {
  const history = useHistory();
  return getCreateAction<ISetForCreation>(
    FB_COLLECTION_SET,
    getCurrentUserUID(),
    () => {
      history.push("/home");
    }
  );
};
