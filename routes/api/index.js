const router = require("express").Router();
const authroutes = require("./Auth.routes");
const productsroutes = require("./Products.routes");

router.use("/auth", authroutes);
router.use("/product",productsroutes);

module.exports = router;
