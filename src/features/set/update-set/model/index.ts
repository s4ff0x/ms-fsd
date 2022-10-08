import { useHistory } from "react-router";
import { ISetForCreation } from "entities/set";
import {
  FB_COLLECTION_SET,
  getCreateAction,
  getDeleteAction,
  getUpdateAction,
} from "shared/api";

export const useUpdateSet = (cb: () => void = () => {}) => {
  const history = useHistory();

  const createSet = getCreateAction<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.goBack();
    cb();
  });

  const updateSet = getUpdateAction<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.goBack();
    cb();
  });
  const deleteSetHandler = getDeleteAction(FB_COLLECTION_SET, cb);

  const deleteSet = async (uid: string) => {
    await history.goBack();
    await deleteSetHandler(uid);
  };

  return { createSet, updateSet, deleteSet };
};
