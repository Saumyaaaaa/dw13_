let validation=(ValidationSchema)=>{
    return(req,res,next)=>{
       
            let data= ValidationSchema.validate(req.body)
            let error=data.error
            
            if(error){
             res.json({
                 success:false,
                 message:error.details[0].message,
             })
            }else{
             next()
            }
         }
    }

export default validation