const db = require("../config/db.config");
const OTP = db.otp;

const OTPController = {
  saveOTP: (req) => {
    OTP.create(req, OTP);
  },
  sendOTP: (id) => {
    OTP.destroy({ where: { userID: id } });
  },
};
module.exports = OTPController;
