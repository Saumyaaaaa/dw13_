import { Schema } from "mongoose";

let reviewSchema = Schema({
  productId: {
    type: Schema.ObjectId,
    ref:"Product",
    required: [true, "productId field is required"],
  },
  userId: {
    type: String,
    ref:"User",
    required: [true, "userId field is required"],
  },
 description: {
    type:String,
    required: [true, "description field is required"],
  },
});
export default reviewSchema;
