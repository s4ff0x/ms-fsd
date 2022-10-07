import { useHistory } from "react-router";
import { ISetForCreation } from "entities/set";
import {
  FB_COLLECTION_SET,
  getCreateAction,
  getCurrentUserUID,
} from "shared/api";

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
