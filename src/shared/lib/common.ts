import { v4 as uuid } from "uuid";

export const uid = () => uuid();

const levels = ["1", "2", "3", "4", "5"] as const;
export type Level = typeof levels[number];
