import { model } from "mongoose";
import studentSchema from "./studentSchema.js";
import teacherSchema from "./teacherSchema.js";
import bookSchema from "./bookSchema.js";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema .js";
import reviewSchema from "./reviewSchema.js";
import traineeSchema from "./traineeSchema.js";
import collegeSchema from "./collegeSchema.js";
import classroomSchema from "./classRoomSchema.js";
import departmentSchema from "./departmentSchema.js";


export let Student =model("Student",studentSchema)
export let Teacher=model("Teacher",teacherSchema)
export let Book=model("Book",bookSchema)
export let Product=model("Product",productSchema)
export let User=model("User",userSchema)
export let Review=model("Review",reviewSchema)
export let Trainee=model("Trainee",traineeSchema)
export let College=model("College",collegeSchema)
export let Classroom=model("Classroom",classroomSchema)
export let Department=model("Department",departmentSchema)


/* 
variable name must be same as model name
model name must be of first letter capital
model name must be singular
*/
