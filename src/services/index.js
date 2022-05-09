export { API } from "./config";

export { login, register } from "./appraiser";
export { registerTest, getTestById, updateTest, uploadPdfFile } from "./test";
export { registerTask, updateTask, deleteTask } from "./task";
export { getTestByAccessCode } from "./participant";
export {
  registerResult,
  getResultById,
  getResultByTestId,
  updateResult,
  addTaskResult,
} from "./result";
