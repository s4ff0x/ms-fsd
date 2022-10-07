import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";
import {
  FB_COLLECTION_CATEGORY,
  getDeleteAction,
  getUpdateAction,
} from "shared/api";

export const useUpdateCategory = () => {
  const history = useHistory();
  const updateCategory = getUpdateAction<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    () => {
      history.push("/home");
    }
  );
  const deleteHandler = getDeleteAction(FB_COLLECTION_CATEGORY);

  const deleteCategory = async (uid: string) => {
    await history.push("/");
    await deleteHandler(uid);
  };

  return { updateCategory, deleteCategory };
};
