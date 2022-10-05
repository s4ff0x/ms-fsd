import { makeAutoObservable } from "mobx";
import { ICategory } from "../lib";

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
