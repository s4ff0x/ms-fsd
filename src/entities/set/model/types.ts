export interface ITerm {
  term: string;
  uid: string;
  definition: string;
  confidence: number;
  createdAt?: number;
  updatedAt?: number;
  isInitial: boolean;
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

export interface ITermCardEditableProps extends ITerm {
  onChange?: (term: string, definition: string) => void;
  onDelete?: () => void;
}

export type ITermCardProps = {
  term: string;
  definition: string;
  isInitial: boolean;
  confidence: number;
  uid: string;
};
