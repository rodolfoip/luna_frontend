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

export const deleteTest = (userId, id) => {
  return API.delete("/usability-test", { data: { userId, id } });
};

export const uploadPdfFile = (formData, filename) => {
  let headers = new Headers();
  headers.append("Access-Control-Allow-Headers", "filename");
  headers.append("Content-Type", "application/pdf");
  headers.append("filename", filename);
  headers.append("x-api-key", "kUcIwRHVfQ3rkstEQr2GH33zKgIt9ZG22AFjyecO");

  let requestOptions = {
    method: "POST",
    headers: headers,
    body: formData,
    redirect: "follow",
  };

  return fetch(
    "https://x9927deg73.execute-api.us-east-1.amazonaws.com/dev/upload",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
