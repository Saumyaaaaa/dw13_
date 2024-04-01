
import { Router } from "express";
import { createDepartmentController, deleteDepartmentController, readDepartmentController, readSpecificDepartmentController, updateDepartmentController } from "../controller/departmentController.js";

let departmentRouter = Router();
departmentRouter
  .route("/")
  .post(createDepartmentController)
  .get(readDepartmentController);

departmentRouter
  .route("/:id") //localhost:8000/department/1234
  .get(readSpecificDepartmentController)
  .patch(updateDepartmentController)
  .delete(deleteDepartmentController);

//give data to postman

export default departmentRouter;
