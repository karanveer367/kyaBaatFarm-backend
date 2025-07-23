const router = require("express").Router();
const contact = require("../../controllers/Auth/contact");
const login = require("../../controllers/Auth/login");
const register = require("../../controllers/Auth/register");
const addproduct=require("../../controllers/product/addproduct");

router.post("/login", login);
router.post("/register",register);
router.post("/contact",contact);

module.exports = router;
