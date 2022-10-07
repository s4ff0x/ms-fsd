import { useHistory } from "react-router";
import { ICategoryForCreation } from "entities/category";
import { FB_COLLECTION_CATEGORY, getCreateAction } from "shared/api";

export const useCreateCategory = () => {
  const history = useHistory();
  return getCreateAction<ICategoryForCreation>(FB_COLLECTION_CATEGORY, () => {
    history.push("/home");
  });
};
