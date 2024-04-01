import { Teacher } from "../schema/model.js"

export let createTeacherController=async(req,res,next)=>{
    let data=req.body  //{name:"...",age:30,isMarried:false}
    try {
        let result= await Teacher.create(data)
        res.json({
            success:true,
            message:"teacher created successfully",
            result:result,
           })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
        
    }
  

}
export let readTeacherController=async(req,res,next)=>{
    //get products from database
  try {
    let result=await Teacher.find({})
    res.json({
        success:true,
        message:"teacher read successfully",
        result:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
  }

}
export let readSpecificTeacherController=async(req,res,next)=>{
    
    try {
        let result= await Teacher.findById(req.params.id)//{id:22734y3}
        res.json({
            success:true,
            message:"teacher created successfully",
            result:result,
           })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let updateTeacherController=async(req,res,next)=>{
    try {
        let result= await Teacher.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json({
            success:true,
            message:"teacher updated successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let deleteTeacherController=async(req,res,next)=> {
    try {
        let result= await Teacher.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"teacher deleted successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}