import { Router } from "express";
import {
  create,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product";

const router = Router();
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProductById);
router.put("/products/:id", updateProductById);
router.post("/products", create);
export default router;
