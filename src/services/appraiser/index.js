import { API } from "../config";

export const login = ({ email, password }) => {
  return API.post("/login", { email, password });
};
