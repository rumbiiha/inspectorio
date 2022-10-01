import { Router } from "./config";

export const getUserByUsername = (userName: string) => {
  return Router.get(userName);
}