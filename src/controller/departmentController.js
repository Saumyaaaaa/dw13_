import { Department } from "../schema/model.js";

export let createDepartmentController = async (req, res, next) => {
  let data = req.body; //{name:"...",age:30,isMarried:false}
  try {
    let result = await Department.create(data);
    res.json({
      success: true,
      message: "department created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readDepartmentController = async (req, res, next) => {
  //get products from database
  try {
    let result = await Department.find({});
    res.json({
      success: true,
      message: "department read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificDepartmentController = async (req, res, next) => {
  try {
    let result = await Department.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "department created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateDepartmentController = async (req, res, next) => {
  try {
    let result = await Department.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "department updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteDepartmentController = async (req, res, next) => {
  try {
    let result = await Department.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "department deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
