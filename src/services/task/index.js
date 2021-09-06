import { API } from "../config";

export const registerTask = ({ testId, order, description }) => {
  return API.post("/usability-test/task", {
    testId,
    order,
    description,
  });
};
