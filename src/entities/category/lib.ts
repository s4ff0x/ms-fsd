export interface ICategory {
  uid: string;
  name: string;
  setIds: string[];
  createdAt: number;
  updatedAt: number;
}

export interface ICategoryForCreation {
  name: string;
  setIds: string[];
}

export const EMPTY_CATEGORY_LIST_TITLE = "There are no categories";
export const CATEGORY_ROUTE = "/category";

export const getCategoryUpdateRouteDynamic = (uid: string) =>
  `${CATEGORY_ROUTE}/update/${uid}`;
export const getCategoryUpdateRoute = () =>
  `${CATEGORY_ROUTE}/update/:categoryId`;
export const getCategoryCreateRoute = () => `${CATEGORY_ROUTE}/create`;
