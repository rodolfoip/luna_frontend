export { API } from "./config";

export { login, register } from "./appraiser";
export { registerTest, getTestById } from "./test";
export { registerTask, updateTask, deleteTask } from "./task";
export { getTestByAccessCode } from "./participant";
export {
  registerResult,
  getResultById,
  getResultByTestId,
  updateResult,
} from "./result";
