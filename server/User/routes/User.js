const express = require("express");
const router = express.Router();
const {
  register,
  login,
  ForgotPassword,
  ResetPassword,
  MyAccount,
} = require("../Controller/User");
const requireAuth = require("../middleware/User");

router.route("/user/register").post(register);
router.route("/user/login").post(login);
router.route("/user/my-account").get(MyAccount);
router.route("/user/forgot-password").post(ForgotPassword);
router.route("/user/reset-password/:resetPasswordToken").post(ResetPassword);

module.exports = router;
