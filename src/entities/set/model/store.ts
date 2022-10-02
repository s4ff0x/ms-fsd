import { ISet } from "../lib";
import { makeAutoObservable } from "mobx";

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
