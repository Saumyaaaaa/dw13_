

import { User } from "../schema/model.js"
import bcrypt from 'bcrypt';
import { sendEmail } from "../utils/sendMail.js";


//hello


export let createUserController=async(req,res,next)=>{
    let data=req.body  //{name:"...",age:30,isMarried:false}
    try {   
        const hashedPassword=await bcrypt.hash(data.password,10)
        data.password=hashedPassword
        let result= await User.create(data)


        await  sendEmail({
            from:"somya hello<saumyaneupane@getMaxListeners.com>",
            to:[req.body.email],
            subject:"Registration",
            html:`You have successfully registered`,
        })
        res.json({
            success:true,
            message:"user created successfully",
            result:result,
           })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
        
    }
  
}
export let readUserController=async(req,res,next)=>{
    //get users from database
    //let result=await User.find({},{},{})
  try {
    // let result=await User.find({name:"nitan"})
    // let result=await User.find({}).sort("name age")

    // let result=await User.find({age:{$gt:25}})
    // let result=await User.find({age:{$gte:25}})
    // let result=await User.find({age:{$ne:25}})
    // let result=await User.find({age:{$lt:25}})
    // let result=await User.find({roll:{$lte:78}})

    // let result=await User.find({age:{$gte:15,$lte:17}})




    //.find({name:{$in:["nitan","ram","hari"]}})
    //.find({name:{$nin:["nitan","ram","hari"]}})
    //.find({name:{/nitan/})                                       regx output = nitan,nitanthpa
    //.find({name:{/nitan/i}) case insensitive 
    //.find({name:{/^ni/}) //starts with ni 
    //.find({name:{/ni$/}) //ends with ni 
    //.find({name:{/\b\w{5,}\b/}) //greater than 4 length words                 regx used for searching ,validation


// sorting technique 
    // .find({}).sort("name ")
    // .find({}).sort("name age")
    // .find({}).sort("-name ")
    // .find({}).sort("-name age")
    // .find({}).sort("-name -age")



    //select
   let result=await User.find({}).select("name -_id")
//   let result=await User.find({}).select("name  email -_id ")//valid



//   let result=await User.find({}).select("name  email -password ")//invalid
//   let result=await User.find({}).select("name  email -_id ") id is exception
//   let result=await User.find({}).select("-name  -email  -password roll ")//it is invalid


//do use - and + simultaneously (except for id)

//find has control over object whereas select has control over object property


/* 
           c=>validation
           r=>search,sorting,pagination





           search => find,select
           sorting=>
           pagination=>limit and skip


           skip 
                .find({}).skip("2") //it skip first (n) no of values

            limit
                find({}).limit("10")//it only  shows first (n)  values








*/

                // find({}).limit("5").skip("2")                    //find({}).skip("2").limit("5")
                // what ever the first order,mongoose, follows sequence
                // find,sort , select,skip,limit
                












    res.json({
        success:true,
        message:"user read successfully",
        result:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
  }

}
export let readSpecificUserController=async(req,res,next)=>{
    
    try {
        let result= await User.findById(req.params.id)//{id:22734y3}
        res.json({
            success:true,
            message:"user read successfully",
            result:result,
           })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let updateUserController=async(req,res,next)=>{
    try {
        let result= await User.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json({
            success:true,
            message:"user updated successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let deleteUserController=async(req,res,next)=> {
    try {
        let result= await User.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"user deleted successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}