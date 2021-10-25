import { API } from "../config";

export const loginByAccessCode = (accessCode) => {
  return API.get(`/usability-test/accesscode/${accessCode}`);
};
