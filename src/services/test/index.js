import { API } from "../config";

export const registerTest = ({
  name,
  accessCode,
  externalLink,
  prototypeLink,
}) => {
  return API.post("/usability-test", {
    name,
    accessCode,
    externalLink,
    prototypeLink,
  });
};
