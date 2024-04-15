import express, { json } from "express";
import bikeRouter from "./src/router/bikeRouter.js";

import { connect } from "mongoose";
import connectToMongoDb from "./src/connectdb/connectToMongodb.js";
import studentRouter from "./src/router/studentRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import productRouter from "./src/router/productRouter.js";
import userRouter from "./src/router/userRouter .js";
import reviewRouter from "./src/router/reviewRouter.js";
import bookRouter from "./src/router/bookRouter.js";
import traineeRouter from "./src/router/traineeRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
import classroomRouter from "./src/router/classroomRouter.js";
import departmentRouter from "./src/router/departmentRouter.js";
import { config } from "dotenv";
import cors from "cors";
import webUserRouter from "./src/router/webUserRouter.js";
import fileRouter from "./src/router/fileRouter.js";
import { port } from "./constant.js";

//make express application
let expressApp = express();

expressApp.use(express.static("./public")); //localhost:8000/model.jpg
//http://localhost:8000/ram/smile.jpg

expressApp.use(cors());
expressApp.use(json()); //this code makes our system to take json data , always place express.use(json())just below the expressApp

config(); //*********configuration for dot env
// console.log( process.env.EMAIL);
// console.log( process.env.PASSWORD);
// console.log( process.env.DB_URL);

//attach port to that
connectToMongoDb();
// expressApp.use(
//     (req,res,next)=>{
//         console.log("i am application middleware1")
//         next()
//     },
//     (req,res,next)=>{
//         console.log("i am application middleware2")
//         next()
//     }
// )

expressApp.use("/bikes", bikeRouter); //localhost:8000/bikes
expressApp.use("/students", studentRouter); //localhost:8000/students
expressApp.use("/teachers", teacherRouter); //localhost:8000/teachers
expressApp.use("/products", productRouter); //localhost:8000/products
expressApp.use("/users", userRouter); //localhost:8000/users
expressApp.use("/reviews", reviewRouter); //localhost:8000/reviews
expressApp.use("/books", bookRouter); //localhost:8000/books
expressApp.use("/trainees", traineeRouter); //localhost:8000/trainees
expressApp.use("/colleges", collegeRouter); //localhost:8000/colleges
expressApp.use("/classrooms", classroomRouter); //localhost:8000/classrooms
expressApp.use("/departments", departmentRouter); //localhost:8000/departments
expressApp.use("/web-users", webUserRouter); //localhost:8000/webUsers
expressApp.use("/files", fileRouter); //localhost:8000/files

expressApp.listen(port, () => {
  console.log(`express application is listening at port ${port}`);
});
