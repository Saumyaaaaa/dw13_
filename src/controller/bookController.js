import { Book } from "../schema/model.js";

export let createBookController = async (req, res, next) => {
  let data = req.body; //{name:"...",age:30,isMarried:false}
  try {
    let result = await Book.create(data);
    res.json({
      success: true,
      message: "book created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readBookController = async (req, res, next) => {
  //get products from database
  try {
    let result = await Book.find({});
    res.json({
      success: true,
      message: "book read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificBookController = async (req, res, next) => {
  try {
    let result = await Book.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "book created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "book updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteBookController = async (req, res, next) => {
  try {
    let result = await Book.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "book deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
