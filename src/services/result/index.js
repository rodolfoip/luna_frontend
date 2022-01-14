import { API } from "../config";

export const registerResult = ({
  testId,
  orderTask,
  timeTask,
  aborted,
  clicks,
}) => {
  return API.post("/result", {
    testId,
    orderTask,
    timeTask,
    aborted,
    clicks,
  });
};

export const getResultById = (id) => {
  return API.get(`/result/${id}`);
};

export const getResultByTestId = (id) => {
  return API.get(`/result/test/${id}`);
};

export const updateResult = ({ _id, sus, affectGrid }) => {
  return API.put("/result", {
    _id,
    sus,
    affectGrid,
  });
};

export const addTaskResult = ({ _id, orderTask, timeTask, aborted }) => {
  return API.put("/add-result", {
    _id,
    orderTask,
    timeTask,
    aborted,
  });
};
