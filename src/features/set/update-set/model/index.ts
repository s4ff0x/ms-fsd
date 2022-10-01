import { entityDeleter, entityUpdater, FB_COLLECTIONS } from "shared";
import { ISetForCreation } from "entities/set";
import { useHistory } from "react-router";

export const useUpdateSet = () => {
  const history = useHistory();
  const updateSet = entityUpdater<ISetForCreation>(FB_COLLECTIONS.SETS, () => {
    history.push("/home");
  });
  const deleteSetHandler = entityDeleter(FB_COLLECTIONS.SETS);

  const deleteSet = async (uid: string) => {
    await history.push("/");
    await deleteSetHandler(uid);
  };

  return { updateSet, deleteSet };
};
