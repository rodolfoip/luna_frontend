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

export const updateTask = ({
  testId,
  order,
  newOrder,
  description,
  sus,
  affectGrid,
}) => {
  return API.put("/usability-test/task", {
    testId,
    order,
    newOrder,
    description,
    sus,
    affectGrid,
  });
};
