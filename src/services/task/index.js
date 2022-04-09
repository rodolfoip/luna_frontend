import { API } from "../config";

export const registerTask = ({ userId, testId, order, description }) => {
  return API.post("/usability-test/task", {
    userId,
    testId,
    order,
    description,
  });
};

export const updateTask = ({
  userId,
  testId,
  actualOrder,
  newOrder,
  description,
  sus,
  affectGrid,
}) => {
  return API.put("/usability-test/task", {
    userId,
    testId,
    actualOrder,
    newOrder,
    description,
    sus,
    affectGrid,
  });
};

export const deleteTask = (userId, task) => {
  return API.delete("/usability-test/task", { data: userId, task });
};
