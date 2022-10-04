import { FB_COLLECTION_SET, ISetForCreation } from "entities/set";
import { useHistory } from "react-router";
import { getCurrentUserUID } from "entities/user";
import { getCreateAction } from "entities/firebase-entity";

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
