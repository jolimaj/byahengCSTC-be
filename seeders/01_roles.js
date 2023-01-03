module.exports = (sequelize, Sequelize) => {
  const Roles = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });
  Roles.bulkCreate(
    [
      { name: "Admin" },
      { name: "Student" },
      { name: "Visitor" },
    ],
    {
      ignoreDuplicates: true,
    }
  ).then(() => console.log("Roles data have been saved"));
  return Roles;
};
