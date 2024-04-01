import { Router } from "express"
import { createReviewController, deleteReviewController, readReviewController, readSpecificReviewController, updateReviewController } from "../controller/reviewController.js"

let reviewRouter=Router()
reviewRouter
.route("/")
.post(createReviewController)
.get(readReviewController)


reviewRouter
.route("/:id")//localhost:8000/review/1234
.get(readSpecificReviewController)
.patch(updateReviewController)
.delete(deleteReviewController)

//give data to postman

export default reviewRouter