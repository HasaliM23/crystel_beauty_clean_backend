import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controlles/productController.js';


const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProducts)
productRouter.delete("/",deleteProduct)
productRouter.put("/" , updateProduct)

export default productRouter;

