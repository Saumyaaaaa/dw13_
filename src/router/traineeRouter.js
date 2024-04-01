

import { Router } from "express"
import { createTraineeController, deleteTraineeController, readSpecificTraineeController, readTraineeController, updateTraineeController } from "../controller/traineeController.js"

let traineeRouter=Router()
traineeRouter
.route("/")
.post(createTraineeController)
.get(readTraineeController)


traineeRouter
.route("/:id")//localhost:8000/trainee/1234
.get(readSpecificTraineeController)
.patch(updateTraineeController)
.delete(deleteTraineeController)

//give data to postman

export default traineeRouter