import { makeAutoObservable } from "mobx";

export interface ICategory {
  uid: string;
  name: string;
  setIds: string[];
  createdAt: number;
  updatedAt: number;
}

export interface ICategoryForCreation {
  name: string;
  setIds: string[];
}

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
