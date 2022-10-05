export const CATEGORY_ROUTE = "/category";

export const getCategoryUpdateRouteDynamic = (uid: string) =>
  `${CATEGORY_ROUTE}/update/${uid}`;
export const getCategoryUpdateRoute = () =>
  `${CATEGORY_ROUTE}/update/:categoryId`;
export const getCategoryCreateRoute = () => `${CATEGORY_ROUTE}/create`;

export const FB_COLLECTION_CATEGORY = "categories";
