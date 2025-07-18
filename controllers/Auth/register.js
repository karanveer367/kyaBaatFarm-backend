const registerModel = require("../../models/register.model");
const merivalidation = require("../../routes/services/validationschema");


const register = async (req, res, next) => {
  try {
    const result = await merivalidation.validateAsync(req.body.values);
    console.log(result);
    const {email, password,confirm,nickname,residence,prefix, phone,gender,agreement} = result;

      const emailExists= await registerModel.findOne({ email: email})

      if(emailExists){
        return res.status(400).json({
          message:"Email already exists",
          success:"False",
        });
      }

      const saveregister =new registerModel({

        email: email,
        password :password,
        confirm : confirm ,
        nickname :nickname,
        residence :residence,
        prefix :prefix,
        phone :phone,
        gender :gender,
        agreement:agreement,

      });

      await saveregister.save();

    return res.status(200).json({

      message:"Registered Successfully",
      userEmail: email,
      password :password,
      success:true,

    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};
module.exports = register;