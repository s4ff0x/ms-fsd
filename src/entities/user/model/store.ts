import { makeAutoObservable } from "mobx";
import { IUser } from "./models";

class UserStore {
  currentUser: IUser | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  updateUser(user: IUser | null) {
    this.currentUser = user;
  }
  updateLoading(loading: boolean) {
    this.loading = loading;
  }
  shouldShowUserContent = () => !userStore.loading && !!userStore.currentUser;
  shouldShowAuth = () => !this.shouldShowUserContent() && !userStore.loading;
}

export const userStore = new UserStore();
