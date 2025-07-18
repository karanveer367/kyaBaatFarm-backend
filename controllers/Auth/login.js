const registerModel = require("../../models/register.model");

const router = require("express").Router();
// first step
// we have to validagte data of frontend(order) or request data
//second step
//we have to verify data from db etheri it exist or not.
//third step
//data save in mongo db
//fourth step
//send response to frontend
const login = async (req, res, next) => {
  try {
    const result = await req.body;
    // console.log(result);
    // console.log(req.body);
    const { email, password } = result;

    const emailExists = await registerModel.findOne({ email: email });

    if (!emailExists) {
      return res.status(400).json({
        message: "Email doesn't exists",
        success: "False",
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "Email doesn't exit",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Login successful",
      success: true,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
module.exports = login;
