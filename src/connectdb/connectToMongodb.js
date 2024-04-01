import mongoose from "mongoose"

let connectToMongoDb = ()=>{
        mongoose.connect("mongodb://0.0.0.0:27017/dw13")
}

export default connectToMongoDb
