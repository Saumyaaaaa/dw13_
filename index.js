import express, { json } from "express"
import bikeRouter from "./src/router/bikeRouter.js"

import { connect } from "mongoose"
import connectToMongoDb from "./src/connectdb/connectToMongodb.js"
import studentRouter from "./src/router/studentRouter.js"
import teacherRouter from "./src/router/teacherRouter.js"
import productRouter from "./src/router/productRouter.js"
import userRouter from "./src/router/userRouter .js"
import reviewRouter from "./src/router/reviewRouter.js"
import bookRouter from "./src/router/bookRouter.js"
import traineeRouter from "./src/router/traineeRouter.js"
import collegeRouter from "./src/router/collegeRouter.js"
import classroomRouter from "./src/router/classroomRouter.js"
import departmentRouter from "./src/router/departmentRouter.js"



//make express application
let expressApp=express()
expressApp.use(json())//this code makes our system to take json data , always place express.use(json())just below the expressApp

//attach port to that
connectToMongoDb()
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

expressApp.use("/bikes",bikeRouter)//localhost:8000/bikes
expressApp.use("/students",studentRouter)//localhost:8000/students
expressApp.use("/teachers",teacherRouter)//localhost:8000/teachers
expressApp.use("/products",productRouter)//localhost:8000/products
expressApp.use("/users",userRouter)//localhost:8000/users
expressApp.use("/reviews",reviewRouter)//localhost:8000/reviews
expressApp.use("/books",bookRouter)//localhost:8000/books
expressApp.use("/trainees",traineeRouter)//localhost:8000/trainees
expressApp.use("/colleges",collegeRouter)//localhost:8000/college
expressApp.use("/classrooms",classroomRouter)//localhost:8000/classroom
expressApp.use("/departments",departmentRouter)//localhost:8000/department


expressApp.listen(8000,()=>{
    console.log("express application is listening at port 8000")
})
