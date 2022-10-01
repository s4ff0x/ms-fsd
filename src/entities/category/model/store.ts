import { ICategory } from "../lib";
import { autorun, makeAutoObservable, toJS } from "mobx";
import { setStore } from "entities/set";

class CategoryStore {
  categories: ICategory[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  update(categories: ICategory[]) {
    this.categories = categories;
  }
}

export const categoryStore = new CategoryStore();
autorun(() => {
  console.log("CategoryStore:", toJS(setStore));
});
