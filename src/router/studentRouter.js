import { Router } from "express"
import { createStudentController, deleteStudentController, readSpecificStudentController, readStudentController, updateStudentController } from "../controller/studentController.js"

let studentRouter=Router()
studentRouter
.route("/")
.post(createStudentController)
.get(readStudentController)


studentRouter
.route("/:id")//localhost:8000/student/1234
.get(readSpecificStudentController)
.patch(updateStudentController)
.delete(deleteStudentController)

//give data to postman

export default studentRouter