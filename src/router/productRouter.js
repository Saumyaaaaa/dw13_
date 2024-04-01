import { Router } from "express"
import { createProductController, deleteProductController, readSpecificProductController, readProductController, updateProductController } from "../controller/productController.js"

let productRouter=Router()
productRouter
.route("/")
.post(createProductController)
.get(readProductController)


productRouter
.route("/:id")//localhost:8000/product/1234
.get(readSpecificProductController)
.patch(updateProductController)
.delete(deleteProductController)

//give data to postman

export default productRouter