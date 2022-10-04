import { useHistory } from "react-router";
import {
  ICategoryForCreation,
  FB_COLLECTION_CATEGORY,
} from "entities/category";
import { getDeleteAction, getUpdateAction } from "entities/firebase-entity";

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
