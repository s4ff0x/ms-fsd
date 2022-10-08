import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";
import {
  FB_COLLECTION_CATEGORY,
  getDeleteAction,
  getUpdateAction,
} from "shared/api";

export const useUpdateCategory = (cb: () => void = () => {}) => {
  const history = useHistory();
  const updateCategory = getUpdateAction<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    () => {
      history.push("/home");
      cb();
    }
  );
  const deleteHandler = getDeleteAction(FB_COLLECTION_CATEGORY, cb);

  const deleteCategory = async (uid: string) => {
    await history.push("/");
    await deleteHandler(uid);
  };

  return { updateCategory, deleteCategory };
};
