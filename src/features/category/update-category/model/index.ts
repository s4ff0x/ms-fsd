import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";
import { FB_COLLECTION_CATEGORY } from "entities/category/api";
import { entityDeleter, entityUpdater } from "entities/entity-manager";

export const useUpdateCategory = () => {
  const history = useHistory();
  const updateCategory = entityUpdater<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    () => {
      history.push("/home");
    }
  );
  const deleteHandler = entityDeleter(FB_COLLECTION_CATEGORY);

  const deleteCategory = async (uid: string) => {
    await history.push("/");
    await deleteHandler(uid);
  };

  return { updateCategory, deleteCategory };
};
