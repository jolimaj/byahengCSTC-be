module.exports = (sequelize, Sequelize) => {
  const Faq = sequelize.define("faq", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    answer: {
      type: Sequelize.TEXT,
    },
  });
  return Faq;
};
