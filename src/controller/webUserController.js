import { WebUser } from "../schema/model.js";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendMail.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../../constant.js";

export let createWebUserController = async (req, res, next) => {
  try {
    let data = req.body;
    let hashPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };
    let result = await WebUser.create(data);

    //send email with link
    //generate token
    //link => fronted link
    //send mail

    let infoObj = {
      _id: result._id,
    };
    let secretKey = "dw13";
    let expiryInfo = {
      expiresIn: "5d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
      from: '"Hello" <kctsohil@gmail.com>',
      to: data.email,
      subject: "account create",
      html: `<h1>your account has been created successfully</h1>
         <a href="http://localhost:3000/verify-email?token=${token}">
             "http://localhost:3000/verify-email?token=${token}
            </a>`,
    });

    res.json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    console.log(token);

    //verify token
    let infoObj = await jwt.verify(token, secretKey);
    let userId = infoObj._id;
    let result = await WebUser.findByIdAndUpdate(
      userId,
      {
        isVerifiedEmail: true,
      },
      {
        new: true,
      }
    );
    res.json({
      success: true,
      message: "user verified read successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await WebUser.findOne({ email: email });
    if (user) {
      if (user.isVerifiedEmail) {
        let isValidpassword = await bcrypt.compare(password, user.password);
        if (isValidpassword) {
          let infoObj = {
            _id: user._id,
          };
        
          let expiryInfo = {
            expiresIn: "365d",
          };
          let token = await jwt.sign(infoObj, secretKey, expiryInfo);
          res.json({
            success: true,
            message: "user login successful.",
            data:token
          });
        } else {
          let error = new Error("credential does not match");
          throw error;
        }
      } else {
        let error = new Error("credential does not match");
        throw error;
      }
    } else {
      let error = new Error("credential does not match");
      throw error;
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.find({}).select("name -_id");

    res.json({
      success: true,
      message: "webWebUser read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let readSpecificWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.findById(req.params.id); //{id:22734y3}
    res.json({
      success: true,
      message: "webWebUser read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let updateWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      message: "webWebUser updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteWebUserController = async (req, res, next) => {
  try {
    let result = await WebUser.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "webWebUser deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
