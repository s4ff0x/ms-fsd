import { auth } from "shared";

export const getCurrentUserUID = () => auth.currentUser?.uid || "";
