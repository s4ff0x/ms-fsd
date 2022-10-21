import { IUser } from "entities/user";
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "shared/api";
import { getGravatarURL } from "shared/lib/common";

export const signInEmailPass = async (email: string, password: string) => {
  const {
    user: { uid, displayName, email: userEmail },
  } = await signInWithEmailAndPassword(auth, email, password);
  return { uid, displayName, email: userEmail } as IUser;
};

export const signUpEmailPass = async (
  email: string,
  password: string,
  displayNameForSignUp: string
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: displayNameForSignUp,
    photoURL: getGravatarURL(user.uid),
  });
  await sendEmailVerification(user);
  // TODO: make it better
  const { uid, displayName, email: userEmail } = user;
  return { uid, displayName, email: userEmail } as IUser;
};
