module.exports = (sequelize, Sequelize) => {
  const Trivia = sequelize.define("contacts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    subject: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.TEXT,
    },
    date: {
      type: Sequelize.DATE,
    },
  });
  return Trivia;
};
