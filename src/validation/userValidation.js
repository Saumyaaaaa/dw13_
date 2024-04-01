import Joi from "joi"

let userValidation=Joi.object()
    .keys({
    name:Joi.string().required().min(3).max(10).messages({
        "any.required":"name is required",
        "string.base":"field must be string",
        "string.min":"name must be at least 3 character",
        "string.max":"name must be at most 10 characters"
    })
    .allow(""),
    roll:Joi.number().required()
    // .min(18)
    // .max(60)
    .custom((value,msg)=>{
        if(value>=18){
            return true
        }
        else{
            return msg.message("roll must be at least 18")
        }
    }).messages({
        "any.required":"roll is required",
        "number.base":"field must be number",
        "number.min":"number must be at least 3 character",
        "number.max":"number must be at most 10 characters"
    }),
   
    
    isMarried:Joi.boolean().required(),
    //if married = true=> make spouse name require 
    //if married =false =>spouse name is not require
    spouseName:Joi.when("isMarried",
    {
        is:true,
        then:Joi.string().required(),
        otherwise:Joi.string()
    }),
    gender:Joi.string().required().valid("female","male","other").messages({
        "string.base":"gender must be string",
        "any.required":"gender is required",
        "any.only":"gender must be either male or female or other",
    }),
    email:Joi.string().required().custom((value,msg)=>{
        let validEmail=value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        if(validEmail){
            return true
        }
        else{
            return msg.message("email is not valid")
        }
    }),
    password:Joi.string().required().custom((value,msg)=>{
        let isValidPassword=value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{}|\\[\]:";'<>?,./])[a-zA-Z\d!@#$%^&*()-_=+{}|\\[\]:";'<>?,./]{8,15}$/)
        if(isValidPassword){
            return true
        }
        else{
            return msg.message("password must have at least one upper case and one lower case one symbol ,one number,min 8character and max 15character")
        }
    }),
    phoneNumber:Joi.number().required(),
    dob:Joi.string().required(),
    location:Joi.object().keys({
        country:Joi.string().required(),
        exactLocation:Joi.string().required()
    }),
    favTeacher:Joi.array().items(Joi.string().required()),
    favSubject:Joi.array().items(Joi.object().keys({
        bookName: Joi.string().required(),
        bookAuthor:Joi.string().required() ,
    }))
}).unknown(false)


//.string()
//value must be string
//it should not be empty
//.min(3) => field must have at least 3 characters
//.max(10) => field must have 10 characters

//.number()
//value must be number(it does not see type for number)
//it means 21 and "21" are same

//.boolean()
//value must be boolean

//required => any (string,number,boolean)
//you must pass field


//enum => fixed value (male,female,other)
//.valid("male","female","other")


//throw custom error


//object
// Joi.object().keys({})


//arrays
//Joi.array().items()


//.when()


//.string()
//must be string
//should not be ""


export default userValidation
