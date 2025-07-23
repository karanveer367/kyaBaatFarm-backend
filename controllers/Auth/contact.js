const contactModel=require("../../models/contact.model");

const contact = async(req , res , next)=>{
  try{

    // const result = await req.body.values;
    // console.log(result);
    const { name,email,mobile,message} = req.body;

    const savecontact =new contactModel({

        name:name,
        email:email,
        mobile:mobile,
        message:message,
    });

    await savecontact.save();

    return res.status(200).json({
        message :"Submitted successfully",
        userEmail:email,
        usermobile:mobile,
        usermessage:message,
        succes:true,
    });
    } catch(error){
        next(error);
        console.log(error);
    }


};
module.exports = contact;