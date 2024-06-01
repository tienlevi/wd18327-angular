import { Router } from "express";
import {
  addCategory,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
} from "../controllers/category";

const categoryRouter = Router();
categoryRouter.get("/category", getAllCategories);
categoryRouter.get("/category/:id", getCategoryById);
categoryRouter.delete("/category/:id", deleteCategoryById);
categoryRouter.put("/category/:id", updateCategoryById);
categoryRouter.post("/category", addCategory);
export default categoryRouter;
