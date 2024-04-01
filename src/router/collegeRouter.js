import { Router } from "express";
import {
  createCollegeController,
  deleteCollegeController,
  readCollegeController,
  readSpecificCollegeController,
  updateCollegeController,
} from "../controller/collegeController.js";

let collegeRouter = Router();
collegeRouter
  .route("/")
  .post(createCollegeController)
  .get(readCollegeController);

collegeRouter
  .route("/:id") //localhost:8000/college/1234
  .get(readSpecificCollegeController)
  .patch(updateCollegeController)
  .delete(deleteCollegeController);

//give data to postman

export default collegeRouter;
