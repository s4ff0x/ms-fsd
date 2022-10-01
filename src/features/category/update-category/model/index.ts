import { entityDeleter, entityUpdater, FB_COLLECTIONS } from "shared";
import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";

export const useUpdateCategory = () => {
  const history = useHistory();
  const updateCategory = entityUpdater<ICategoryForCreation>(
    FB_COLLECTIONS.CATEGORIES,
    () => {
      history.push("/home");
    }
  );
  const deleteHandler = entityDeleter(FB_COLLECTIONS.CATEGORIES);

  const deleteCategory = async (uid: string) => {
    await history.push("/");
    await deleteHandler(uid);
  };

  return { updateCategory, deleteCategory };
};
