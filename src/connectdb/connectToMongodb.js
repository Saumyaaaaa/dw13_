import mongoose from "mongoose"
import { dbURL } from "../../constant.js"

let connectToMongoDb = async()=>{

try {
        await mongoose.connect(`${dbURL}`);
        console.log(`application is connected to database successfully at port ${dbURL}`);
} catch (error) {
        console.log(error.message)
}



}

export default connectToMongoDb
