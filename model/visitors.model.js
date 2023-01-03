module.exports = (sequelize, Sequelize) => {
  const Visitor = sequelize.define("visitor", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
  });
  return Visitor;
};
