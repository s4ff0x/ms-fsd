import { action, makeAutoObservable } from "mobx";
import { ICategory } from "./types";

class CategoryStore {
  categories: ICategory[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action update(categories: ICategory[]) {
    this.categories = categories;
  }
}

export const categoryStore = new CategoryStore();
