export const SIGN_IN_ROUTE = "/sign-in";
export const SIGN_UP_ROUTE = "/sign-up";
export const SIGN_OUT_ROUTE = "/sign-out";
export const HOME_ROUTE = "/home";
export const SETTINGS_ROUTE = `/settings`;

export const SET_ROUTE = `${HOME_ROUTE}/set`;
export const getSetUpdateRoute = (uid: string) => `${SET_ROUTE}/update/${uid}`;
export const SET_ROUTE_UPDATE = `${SET_ROUTE}/update/:setId`;
export const SET_ROUTE_CREATE = `${SET_ROUTE}/create`;

export const CATEGORY_ROUTE = `${HOME_ROUTE}/category`;
export const getCategoryUpdateRoute = (uid: string) =>
  `${CATEGORY_ROUTE}/update/${uid}`;
export const CATEGORY_UPDATE_ROUTE = `${CATEGORY_ROUTE}/update/:categoryId`;
export const CATEGORY_CREATE_ROUTE = `${CATEGORY_ROUTE}/create`;
