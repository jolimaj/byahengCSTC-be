const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/user");
const mw = require("../validation/validate");

router.post("/signin", mw.validateLogin, model.loginUser);
router.post("/signup", mw.validateRegistration, model.registerUser);
router.put(
  "/signin/password-setup/:id/:token",
  mw.validatePassword,
  model.setPassword
);
router.put(
  "/signin/password-reset/:id/:token",
  mw.validatePassword,
  model.setPassword
);
router.post("/signin/forgot_password", mw.validateEmail, model.passwordReset);
router.put("/signout/:id", model.logoutUser);
module.exports = router;
