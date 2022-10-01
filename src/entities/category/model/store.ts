import { ICategory } from "../lib";
import { makeAutoObservable } from "mobx";

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
