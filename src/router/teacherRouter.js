import { Router } from "express"
import { createTeacherController, deleteTeacherController, readSpecificTeacherController, readTeacherController, updateTeacherController } from "../controller/teacherController.js"
import teacherValidation from "../validation/teacherValidation.js"
import validation from "../middleware/validation.js"


let teacherRouter=Router()
teacherRouter
.route("/")
.post(validation(teacherValidation),createTeacherController)
.get(readTeacherController)


teacherRouter
.route("/:id")//localhost:8000/teacher/1234
.get(readSpecificTeacherController)
.patch(updateTeacherController)
.delete(deleteTeacherController)

//give data to postman

export default teacherRouter