import { Schema } from "mongoose";

let bookSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  author: {
    type: String,
    required: [true, "author field is required"],
  },
  
  
  isAvailable: {
    type: Boolean,
    required: [true, "isAvailable field is required"],
  },
});
export default bookSchema;
