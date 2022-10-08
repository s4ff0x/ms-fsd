import { useHistory } from "react-router";
import { ISetForCreation } from "entities/set";
import {
  FB_COLLECTION_SET,
  getDeleteAction,
  getUpdateAction,
} from "shared/api";

export const useUpdateSet = (cb: () => void = () => {}) => {
  const history = useHistory();
  const updateSet = getUpdateAction<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.push("/home");
    cb();
  });
  const deleteSetHandler = getDeleteAction(FB_COLLECTION_SET, cb);

  const deleteSet = async (uid: string) => {
    await history.push("/");
    await deleteSetHandler(uid);
  };

  return { updateSet, deleteSet };
};
