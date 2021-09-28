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

export const listTests = () => {
  return API.get("/usability-test");
};

export const getTestById = (id) => {
  return API.get(`/usability-test/${id}`);
};

export const getTestByName = (name) => {
  return API.get(`/usability-test/name/${name}`);
};

export const getTestByAccessCode = (accessCode) => {
  return API.get(`/usability-test/accessCode/${accessCode}`);
};

export const updateTest = ({ _id, name, externalLink, prototypeLink }) => {
  return API.put("/usability-test", {
    _id,
    name,
    externalLink,
    prototypeLink,
  });
};

export const deleteTest = (id) => {
  return API.delete("/usability-test", { data: { id: id } });
};
