

import { Router } from "express"
import {  handleSingleFileController } from "../controller/fileController.js"


let fileRouter=Router()


fileRouter
.route("/")
.post(handleSingleFileController )



export default fileRouter
