import { useHistory } from "react-router";
import { getDeleteAction, getUpdateAction } from "entities/firebase-entity";
import { FB_COLLECTION_SET, ISetForCreation } from "entities/set";

export const useUpdateSet = () => {
  const history = useHistory();
  const updateSet = getUpdateAction<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.push("/home");
  });
  const deleteSetHandler = getDeleteAction(FB_COLLECTION_SET);

  const deleteSet = async (uid: string) => {
    await history.push("/");
    await deleteSetHandler(uid);
  };

  return { updateSet, deleteSet };
};
