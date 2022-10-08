import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";
import {
  FB_COLLECTION_CATEGORY,
  getCreateAction,
  getDeleteAction,
  getUpdateAction,
} from "shared/api";

export const useUpdateCategory = (cb: () => void = () => {}) => {
  const history = useHistory();

  const createCategory = getCreateAction<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    () => {
      history.goBack();
      cb();
    }
  );

  const updateCategory = getUpdateAction<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    () => {
      history.goBack();
      cb();
    }
  );
  const deleteHandler = getDeleteAction(FB_COLLECTION_CATEGORY, cb);

  const deleteCategory = async (uid: string) => {
    await history.goBack();
    await deleteHandler(uid);
  };

  return { createCategory, updateCategory, deleteCategory };
};
