import { Student } from "../schema/model.js"

export let createStudentController=async(req,res,next)=>{
    let data=req.body  //{name:"...",age:30,isMarried:false}
    try {
        let result= await Student.create(data)
        res.json({
            success:true,
            message:"student created successfully",
            result:result,
           })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
        
    }
  

}
export let readStudentController=async(req,res,next)=>{
    //get products from database
  try {
    let result=await Student.find({})
    res.json({
        success:true,
        message:"student read successfully",
        result:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
  }

}
export let readSpecificStudentController=async(req,res,next)=>{
    
    try {
        let result= await Student.findById(req.params.id)//{id:22734y3}
        res.json({
            success:true,
            message:"student created successfully",
            result:result,
           })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let updateStudentController=async(req,res,next)=>{
    try {
        let result= await Student.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json({
            success:true,
            message:"student updated successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let deleteStudentController=async(req,res,next)=> {
    try {
        let result= await Student.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"student deleted successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}