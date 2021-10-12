import { API } from "../config";

export const registerTask = ({ testId, order, description }) => {
  return API.post("/usability-test/task", {
    testId,
    order,
    description,
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

export const deleteTask = (task) => {
  return API.delete("/usability-test/task", { data: task });
};
