import { StatusCodes } from "http-status-codes";
import category from "../models/category.js";

export const addCategory = async (req, res) => {
  try {
    const data = await category.create(req.body);
    return res.status(StatusCodes.CREATED).json(data);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const result = await category.find({});
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const data = await category.findById(req.params.id);
    if (data.length === 0)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không tìm thấy sản phẩm nào!" });
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const deleteCategoryById = async (req, res) => {
  try {
    const data = await category.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const updateCategoryById = async (req, res) => {
  try {
    const data = await category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(data);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
