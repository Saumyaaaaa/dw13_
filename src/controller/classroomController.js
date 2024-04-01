import { Classroom } from "../schema/model.js";

export let createClassroomController = async (req, res, next) => {
  let data = req.body; //{name:"...",age:30,isMarried:false}
  try {
    let result = await Classroom.create(data);
    res.json({
      success: true,
      message: "classroom created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readClassroomController = async (req, res, next) => {
  //get products from database
  try {
    let result = await Classroom.find({});
    res.json({
      success: true,
      message: "classroom read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "classroom created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "classroom updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteClassroomController = async (req, res, next) => {
  try {
    let result = await Classroom.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "classroom deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
