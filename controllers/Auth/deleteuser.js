const registerModel = require("../../models/register.model")

const Userdelete = async (req,res,next) => {

    try{
        const { id } = result;

        const deleteuser= await register.findOne({ id : id})
    
         if (!deleteuser) {
      return res.status(404).json({ message: "User not found" });
    }
        res.status(200).json({ message: "User deleted successfully", user: deleteuser });

    }


    catch(error){
                 console.error(error);
    res.status(500).json({ message: "Server error" });
    }
};

module.exports = Userdelete;