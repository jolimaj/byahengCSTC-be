const { securePassword } = require("../validation/securePassword");
const hashedPassword = securePassword("byahengCSTC");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleID: {
      type: Sequelize.INTEGER,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    middle_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.TEXT,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1, //1 active //0 not active
    },
  });
  User.bulkCreate(
    [
      {
        roleID: 1,
        email: "byahengcstc@gmail.com",
        password: hashedPassword,
      },
    ],
    {
      ignoreDuplicates: true,
    }
  )
    .then(() => console.log("User data have been saved"))
    .catch((error) =>
      console.log("🚀 ~ file: 02_user.js ~ line 45 ~ error", error)
    );
  return User;
};
