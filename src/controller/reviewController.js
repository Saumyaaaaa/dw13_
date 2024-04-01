
import { Review } from "../schema/model.js"


export let createReviewController=async(req,res,next)=>{
    let data=req.body  //{name:"...",age:30,isMarried:false}
    try {
        let result= await Review.create(data)
        res.json({
            success:true,
            message:"review created successfully",
            result:result,
           })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
        
    }
  

}
export let readReviewController=async(req,res,next)=>{
    //get reviews from database
  try {
    let result=await Review.find({}).populate("productId","name price").populate("userId","name ")
    res.json({
        success:true,
        message:"review read successfully",
        result:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
  }

}
export let readSpecificReviewController=async(req,res,next)=>{
    
    try {
        let result= await Review.findById(req.params.id)//{id:22734y3}
        res.json({
            success:true,
            message:"review read successfully",
            result:result,
           })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let updateReviewController=async(req,res,next)=>{
    try {
        let result= await Review.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json({
            success:true,
            message:"review updated successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let deleteReviewController=async(req,res,next)=> {
    try {
        let result= await Review.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"review deleted successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}