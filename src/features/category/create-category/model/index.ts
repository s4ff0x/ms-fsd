import {
  FB_COLLECTION_CATEGORY,
  ICategoryForCreation,
} from "entities/category";
import { useHistory } from "react-router";
import { getCurrentUserUID } from "entities/user";
import { getCreateAction } from "entities/firebase-entity";

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
