import { API } from "../config";

export const registerTest = ({
  name,
  accessCode,
  externalLink,
  prototypeLink,
  userId,
}) => {
  return API.post("/usability-test", {
    name,
    accessCode,
    externalLink,
    prototypeLink,
    userId,
  });
};

export const listTests = (userId) => {
  return API.get(`/usability-test/all/${userId}`);
};

export const getTestById = (userId, id) => {
  return API.post("/usability-test/id", {
    userId: userId,
    id: id,
  });
};

export const getTestByName = (userId, name) => {
  return API.get("/usability-test/name", {
    userId,
    name,
  });
};

export const getTestByAccessCode = (userId, accessCode) => {
  return API.get("/usability-test/accessCode/", {
    userId,
    accessCode,
  });
};

export const updateTest = ({
  _id,
  name,
  externalLink,
  prototypeLink,
  tasks,
  quantity,
  userId,
}) => {
  return API.put("/usability-test", {
    _id,
    name,
    externalLink,
    prototypeLink,
    tasks,
    quantity,
    userId,
  });
};

export const deleteTest = (id) => {
  return API.delete("/usability-test", { data: { id: id } });
};
