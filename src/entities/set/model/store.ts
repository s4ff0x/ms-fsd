import { makeAutoObservable } from "mobx";
import { ISet } from "../lib";

class SetStore {
  sets: ISet[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  update(sets: ISet[]) {
    this.sets = sets;
  }
}

export const setStore = new SetStore();
