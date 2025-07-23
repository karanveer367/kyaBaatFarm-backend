const { model,Schema} = require("mongoose");
const { message } = require("../routes/services/validationschema");

const ContactSchema= new Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }

})

module.exports =model("contact us",ContactSchema,"contact us");