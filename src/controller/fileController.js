export let handleSingleFileController=async(req,res,next)=>{
    let link =`http://localhost:8000/${req.file.filename}`
    res.json({
        success: true,
        message:`file saved successfully`,
        result:link,
    })
    

    
//  console.log(req.body,req.file)
}



export let handleMultipleFileController = async (req, res, next) => {
  let link = req.files.map((value,i)=>{
    return `http://localhost:8000/${value.filename}`;
  })
  
  res.json({
    success: true,
    message: `file saved successfully`,
    result: link,
 
  });
console.log(req.files);
  
};
