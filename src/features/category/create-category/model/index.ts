import {
  FB_COLLECTION_CATEGORY,
  ICategoryForCreation,
} from "entities/category";
import { useHistory } from "react-router";
import { getCurrentUserUID } from "entities/user";
import { entityCreator } from "entities/entity-manager";

export const useCreateCategory = () => {
  const history = useHistory();
  return entityCreator<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    getCurrentUserUID(),
    () => {
      history.push("/home");
    }
  );
};
