import { entityCreator, FB_COLLECTIONS } from "shared";
import { ICategoryForCreation } from "entities/category";

export const createCategory = entityCreator<ICategoryForCreation>(
  FB_COLLECTIONS.CATEGORIES
);
