import { Schema } from "mongoose";




/* 

manipulation
      trim
      lowercase
      uppercase
      default


validation
      required

*********for string
    minLength
    maxLength


********* for number
    min
    max


*/
let userSchema = Schema({
  name: {
    type: String,
    // trim:true,
    // lowercase:true,
    //uppercase:true,
    //default:"kapil"
    // required:[true,"name field is required"],
    // minLength:[3,"name must be at least 3 characters "],
    // maxlength:[30,"name can not be more than 30 characters"],
    // validate:(value)=>{
    //   let isValidName=/^[a-zA-Z]+$/.test(value)
    //   if(isValidName){
    //   }
    //   else{
    //     let error=new  Error("name is invalid");
    //     throw error;
    //   }
    // }
  },
  email:{
    type: String,
    // required:[true,"email field is required"],
    // unique:true,
    // validate:(value)=>{
    //   let isValidEmail=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
    //   if(isValidEmail){
    //   }
    //   else{
    //     let error=new  Error("Email is invalid");
    //     throw error;
    //   }
    // }
  },
  password:{
    type: String,
    // required:[true,"password field is required"],
    // validate:(value)=>{
    //   let isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
    //   .test(value);
    //   if(isValidPassword){
    //   }
    //   else{
    //     let error=new  Error("Password should consist 8 characters long ,have special symbol,at least one digit and one uppercase letter");
    //     throw error;
    //   }
    // }
  },
  phoneNumber:{
    type:Number,
    // required:[true,"phoneNumber field is required"],
    
    // validate:(value)=>{
    // let num=String(value)
    // if(num.length!==10){
    //   let error=new Error("Invalid phone number")
    //   throw error;
    // }
    // }
  },
  roll:{
    type:Number,
    // min:[10,"roll must be at least 10"],
    // max:[500,"roll number should not exceed 500"]
    
  },
  isMarried:{
    type:Boolean,
  },
  spouseName:{
    type: String,
  },
 
  gender:{
    type: String,
    // validate:(value)=>{
    //   if(value==="male"|| value==="female" ||value==="other"){
        
    //   }
    //   else{
    //     let error=new Error("Invalid gender")
    //     throw error
    //   }
    // }
  },
  dob:{
    type:Date,
  },
  location:{
    country:{
      type: String,
    },
    exactLocation:{
      type: String,
    }
  },
  favTeacher:[
    {
      type:String,
    }
  ],
favSubject:[
  {
    bookName:{
      type:String,
    },
    bookAuthor:{
      type:String,
    }

  }
]

});
export default userSchema;
