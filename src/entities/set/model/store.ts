import { ISet } from "../lib";
import { autorun, makeAutoObservable, toJS } from "mobx";

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

autorun(() => {
  console.log("SetStore:", toJS(setStore));
});
