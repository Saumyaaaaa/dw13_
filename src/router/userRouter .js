import { Router } from "express"
import { createUserController, deleteUserController, readSpecificUserController, readUserController, updateUserController } from "../controller/userController.js"

import validation from "../middleware/validation.js"
import userValidation from "../validation/userValidation.js"

let userRouter=Router()


userRouter
.route("/")
.post(validation(userValidation),createUserController)

.get(readUserController)


userRouter
.route("/:id")//localhost:8000/user/1234
.get(readSpecificUserController)
.patch(updateUserController)
.delete(deleteUserController)

//give data to postman

export default userRouter