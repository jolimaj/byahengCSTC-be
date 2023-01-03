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
  Survey.bulkCreate(
    [
      {
        userID: 1,
        category: "Rate your experience by using this system",
        score: 0,
      },
      {
        userID: 1,
        category:
          "If you have used a virtual tour, how difficult is it to use? ",
        score: 0,
      },
      {
        userID: 1,
        category:
          "Do you encounter any bugs and error while using this system and the virtual tour?",
        score: 0,
      },
      {
        userID: 1,
        category: "Are you satisfied in ByahengCSTC system?",
        score: 0,
      },
      {
        userID: 1,
        category:
          "Can you rate how ByahengCSTC website and virtual tour need the improvement?",
        score: 0,
      },
    ],
    {
      ignoreDuplicates: true,
    }
  ).then(() => console.log("Survey data have been saved"));
  return Survey;
};
