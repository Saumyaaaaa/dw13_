import { Product } from "../schema/model.js"


export let createProductController=async(req,res,next)=>{
    let data=req.body  //{name:"...",age:30,isMarried:false}
    try {
        let result= await Product.create(data)
        res.json({
            success:true,
            message:"product created successfully",
            result:result,
           })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
        
    }
  

}
export let readProductController=async(req,res,next)=>{
    //get products from database
  try {
    let result=await Product.find({})
    res.json({
        success:true,
        message:"product read successfully",
        result:result,
    })
  } catch (error) {
    res.json({
        success:false,
        message:error.message,
    })
  }

}
export let readSpecificProductController=async(req,res,next)=>{
    
    try {
        let result= await Product.findById(req.params.id)//{id:22734y3}
        res.json({
            success:true,
            message:"product read successfully",
            result:result,
           })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let updateProductController=async(req,res,next)=>{
    try {
        let result= await Product.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json({
            success:true,
            message:"product updated successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}
export let deleteProductController=async(req,res,next)=> {
    try {
        let result= await Product.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"product deleted successfully",
            result:result,
           })

    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }
}