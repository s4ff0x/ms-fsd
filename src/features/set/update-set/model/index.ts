import { FB_COLLECTION_SET, ISetForCreation } from "entities/set";
import { useHistory } from "react-router";
import { entityDeleter, entityUpdater } from "entities/entity-manager";

export const useUpdateSet = () => {
  const history = useHistory();
  const updateSet = entityUpdater<ISetForCreation>(FB_COLLECTION_SET, () => {
    history.push("/home");
  });
  const deleteSetHandler = entityDeleter(FB_COLLECTION_SET);

  const deleteSet = async (uid: string) => {
    await history.push("/");
    await deleteSetHandler(uid);
  };

  return { updateSet, deleteSet };
};
