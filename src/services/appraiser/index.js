import { API } from "../config";

export const login = ({ email, password }) => {
  return API.post("/login", { email, password });
};

export const register = ({ name, email, password }) => {
  return API.post("/user", { name, email, password });
};
