import { Router } from "express";
import {
  createWebUserController,
  deleteWebUserController,
  loginUser,
  readSpecificWebUserController,
  readWebUserController,
  updateWebUserController,
  verifyEmail,
} from "../controller/webUserController.js";

// import validation from "../middleware/validation.js";
// import webUserValidation from "../validation/webUserValidation.js";

let webUserRouter = Router();

webUserRouter
  .route("/")
  .post(createWebUserController)

  .get(readWebUserController);

webUserRouter.route("/verify-email")
.patch(verifyEmail);

webUserRouter.route("/login").post(loginUser)

webUserRouter
  .route("/:id") //localhost:8000/webUser/1234
  .get(readSpecificWebUserController)
  .patch(updateWebUserController)
  .delete(deleteWebUserController);

//give data to postman

export default webUserRouter;
