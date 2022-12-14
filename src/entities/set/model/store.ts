import { action, makeAutoObservable } from "mobx";
import { ISet } from "./types";

class SetStore {
  sets: ISet[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action updateSets(sets: ISet[]) {
    this.sets = sets;
  }
}

export const setStore = new SetStore();
