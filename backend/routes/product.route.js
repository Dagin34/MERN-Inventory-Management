import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//.. Fetch all the products
router.get("/", getProducts)

//.. Create a single Product
router.post("/", createProduct);

//.. Update a Product
router.put("/:id", updateProduct);

//.. Delete a Product
router.delete("/:id", deleteProduct); 


// # Use put for updating all the fields and use patch for updating some fields

export default router;