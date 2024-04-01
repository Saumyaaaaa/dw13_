

import { Router } from "express"
import { createBookController, deleteBookController, readBookController, readSpecificBookController, updateBookController } from "../controller/bookController.js"

let bookRouter=Router()

//middleware => fun => req,res,next
// let isAuthorized=(value)=>{
//     return(req,res,next)=>{
        //if admin or superadmin => delete
        //else => cant delete
//         if(value==="admin"||value==="superadmin"){
//             console.log("user deleted")
//         }else{
//             console.log("user cant deleted")
//         }
//     }
    
// }
// let deleteUser=(req,res,next)=>{
//     console.log("user deleted succsefully")
// }
//without function call (if you dont want to pass the value) (req,res,next)=>{}


//with function call(use if you want to pass the value) ()=>{return ((req,res,next)=>{})}

bookRouter
.route("/")
.post(createBookController )
// .post(isAuthorized("admin"),deleteUser)
.get(readBookController)


bookRouter
.route("/:id")//localhost:8000/book/1234
.get(readSpecificBookController)
.patch(updateBookController)
.delete(deleteBookController)

//give data to postman

export default bookRouter