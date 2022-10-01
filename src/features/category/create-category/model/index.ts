import { entityCreator, FB_COLLECTIONS } from "shared";
import { ICategoryForCreation } from "entities/category";
import { useHistory } from "react-router";

export const useCreateCategory = () => {
  const history = useHistory();
  return entityCreator<ICategoryForCreation>(FB_COLLECTIONS.CATEGORIES, () => {
    history.push("/home");
  });
};
