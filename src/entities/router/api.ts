export const getSignInRoute = () => "/sign-in";
export const getSignUpRoute = () => "/sign-up";
export const getHomeRoute = () => "/home";

export const SET_ROUTE = "/set";
export const getSetRouteUpdateDynamic = (uid: string) =>
  `${SET_ROUTE}/update/${uid}`;
export const getSetRouteUpdate = () => `${SET_ROUTE}/update/:setId`;
export const getSetRouteCreate = () => `${SET_ROUTE}/create`;

export const CATEGORY_ROUTE = "/category";
export const getCategoryUpdateRouteDynamic = (uid: string) =>
  `${CATEGORY_ROUTE}/update/${uid}`;
export const getCategoryUpdateRoute = () =>
  `${CATEGORY_ROUTE}/update/:categoryId`;
export const getCategoryCreateRoute = () => `${CATEGORY_ROUTE}/create`;
