module.exports = (sequelize, Sequelize) => {
  const Trivia = sequelize.define("activities", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    campus: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    images: {
      type: Sequelize.TEXT,
    },
  });
  return Trivia;
};
