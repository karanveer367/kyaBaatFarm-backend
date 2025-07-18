const { model,Schema } = require("mongoose");

const RegisterSchema = new Schema({ 
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
})
module.exports = model("users",RegisterSchema,"users");