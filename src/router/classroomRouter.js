

import { Router } from "express";
import { createClassroomController, deleteClassroomController, readClassroomController, readSpecificClassroomController, updateClassroomController } from "../controller/classroomController.js";

let classroomRouter = Router();
classroomRouter
  .route("/")
  .post(createClassroomController)
  .get(readClassroomController);

classroomRouter
  .route("/:id") //localhost:8000/classroom/1234
  .get(readSpecificClassroomController)
  .patch(updateClassroomController)
  .delete(deleteClassroomController);

//give data to postman

export default classroomRouter;
