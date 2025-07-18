const router = require("express").Router();
const login = require("../../controllers/Auth/login");
const register = require("../../controllers/Auth/register");

router.post("/login", login);
router.post("/register",register);

module.exports = router;
