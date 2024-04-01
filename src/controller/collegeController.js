import { College } from "../schema/model.js";

export let createCollegeController = async (req, res, next) => {
  let data = req.body; //{name:"...",age:30,isMarried:false}
  try {
    let result = await College.create(data);
    res.json({
      success: true,
      message: "college created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readCollegeController = async (req, res, next) => {
  //get products from database
  try {
    let result = await College.find({});
    res.json({
      success: true,
      message: "college read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificCollegeController = async (req, res, next) => {
  try {
    let result = await College.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "college created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateCollegeController = async (req, res, next) => {
  try {
    let result = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "college updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteCollegeController = async (req, res, next) => {
  try {
    let result = await College.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "college deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
