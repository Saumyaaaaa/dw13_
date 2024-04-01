import Joi from "joi"

let teacherValidation=Joi.object()
    .keys(
        {
            name:Joi.string().required(),
            age:Joi.number().required(),
            isMarried:Joi.boolean().required(),
            subject:Joi.string().required(),

        }
    ).unknown(false)





export default teacherValidation
