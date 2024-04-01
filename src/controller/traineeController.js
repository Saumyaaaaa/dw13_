import { Trainee } from "../schema/model.js";

export let createTraineeController = async (req, res, next) => {
  let data = req.body; //{name:"...",age:30,isMarried:false}
  try {
    let result = await Trainee.create(data);
    res.json({
      success: true,
      message: "trainee created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readTraineeController = async (req, res, next) => {
  //get products from database
  try {
    let result = await Trainee.find({});
    res.json({
      success: true,
      message: "trainee read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "trainee created successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "trainee updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteTraineeController = async (req, res, next) => {
  try {
    let result = await Trainee.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "trainee deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
