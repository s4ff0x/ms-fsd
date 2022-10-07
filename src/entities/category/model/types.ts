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
