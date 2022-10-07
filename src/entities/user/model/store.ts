import { action, computed, makeAutoObservable } from "mobx";
import { IUser } from "./types";

class UserStore {
  currentUser: IUser | null = null;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action updateUser(user: IUser | null) {
    this.currentUser = user;
  }
  @action updateLoading(loading: boolean) {
    this.loading = loading;
  }
  @computed get shouldShowUserContent() {
    return !userStore.loading && !!userStore.currentUser;
  }

  @computed get shouldShowAuth() {
    return !this.shouldShowUserContent && !userStore.loading;
  }
}

export const userStore = new UserStore();
