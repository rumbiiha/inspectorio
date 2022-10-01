import axios from "axios";

export const Router = axios.create({
  baseURL: 'https://api.github.com/users/',
});
