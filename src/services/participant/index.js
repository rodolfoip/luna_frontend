import { API } from "../config";

export const getTestByAccessCode = (accessCode) => {
  return API.get(`/usability-test/accesscode/${accessCode}`);
};
