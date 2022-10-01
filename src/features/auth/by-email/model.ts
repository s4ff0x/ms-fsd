import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUser } from "entities/user";
import { auth } from "entities/firebase";

export const signInEmailPass = async (email: string, password: string) => {
  const {
    user: { uid, displayName, email: userEmail },
  } = await signInWithEmailAndPassword(auth, email, password);
  return { uid, displayName, email: userEmail } as IUser;
};

export const signUpEmailPass = async (email: string, password: string) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await sendEmailVerification(user);
  // TODO: make it better
  const { uid, displayName, email: userEmail } = user;
  return { uid, displayName, email: userEmail } as IUser;
};
