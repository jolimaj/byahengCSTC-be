module.exports = (sequelize, Sequelize) => {
  const Survey = sequelize.define("survey", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.TEXT,
    },
    score: {
      type: Sequelize.REAL,
    },
  });
  return Survey;
};
