import { useHistory } from "react-router";
import {
  FB_COLLECTION_CATEGORY,
  ICategoryForCreation,
} from "entities/category";
import { getCreateAction } from "entities/firebase-entity";
import { getCurrentUserUID } from "entities/user";

export const useCreateCategory = () => {
  const history = useHistory();
  return getCreateAction<ICategoryForCreation>(
    FB_COLLECTION_CATEGORY,
    getCurrentUserUID(),
    () => {
      history.push("/home");
    }
  );
};
