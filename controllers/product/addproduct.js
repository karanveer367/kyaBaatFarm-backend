const addproductModel=require("../../models/addproduct.model");

const addproduct = async(req , res , next)=>{
  try{
     if (!req.body || !req.body.values) {
      return res.status(400).json({ message: "Invalid request body", success: false });
    }

    const result = req.body;
    console.log(result);
    const { name,price,unit,quantity,category,image} = result;

    const saveaddproduct =new addproductModel({

        name:name,
        price:price,
        unit:unit,
        quantity:quantity,
        category:category,
        image:image,
    });
quantity
    await saveaddproduct.save();

    return res.status(200).json({
        message :"Added successfully",
        name:name,
        price:price,
        unit:unit,
        quantity:quantity,
        category:category,
        image:image,
        success:true,
    });
    } catch(error){
        next(error);
        console.log(error);
    }


};
module.exports = addproduct;