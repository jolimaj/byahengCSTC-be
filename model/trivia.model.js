module.exports = (sequelize, Sequelize) => {
  const Trivia = sequelize.define("trivia", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    images: {
      type: Sequelize.TEXT,
    },
  });
  return Trivia;
};
