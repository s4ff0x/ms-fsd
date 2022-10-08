import { useHistory } from "react-router";
import { ISetForCreation } from "entities/set";
import { FB_COLLECTION_SET, getCreateAction } from "shared/api";

export const useCreateSet = (cb: () => void = () => {}) => {
  const history = useHistory();
  return getCreateAction<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.push("/home");
    cb();
  });
};
