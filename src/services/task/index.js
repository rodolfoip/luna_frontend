import { API } from "../config";

export const registerTask = ({ testId, order, description }) => {
  return API.post("/usability-test/task", {
    testId,
    order,
    description,
  });
};

export const deleteTask = (task) => {
  return API.delete("/usability-test/task", { data: task });
};
