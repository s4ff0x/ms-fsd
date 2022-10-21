import { v4 as uuid } from "uuid";
const md5 = require("md5");
export const uid = () => uuid();

const levels = ["1", "2", "3", "4", "5"] as const;
export type Level = typeof levels[number];

export function getGravatarURL(uid: string) {
  const address = String(uid).trim().toLowerCase();
  const hash = md5(address);
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}
