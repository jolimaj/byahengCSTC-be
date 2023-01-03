module.exports = (sequelize, Sequelize) => {
  const OTP = sequelize.define("otp", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    link: {
      type: Sequelize.STRING,
    },
  });
  return OTP;
};
