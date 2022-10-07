export interface ITerm {
  uid: string;
  term: string;
  definition: string;
}

export interface ITermEditable extends ITerm {
  onChange?: (term: string, definition: string) => void;
  onDelete?: () => void;
}

export interface ISet {
  uid: string;
  name: string;
  terms: ITerm[];
  userId: string;
  createdAt: number;
  updatedAt: number;
}

export interface ISetForCreation {
  name: string;
  terms: ITerm[];
}
