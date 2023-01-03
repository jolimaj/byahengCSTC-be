module.exports = (sequelize, Sequelize) => {
  const Campus = sequelize.define("campus", {
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
    tour_url: {
      type: Sequelize.STRING,
    },
  });
  Campus.bulkCreate(
    [
      { userID: 1, name: "CSTC Main Campus Sariaya Quezon" },
      { userID: 1, name: "CSTC Atimonan" },
      { userID: 1, name: "CSTC Lucena" },
    ],
    {
      ignoreDuplicates: true,
    }
  ).then(() => console.log("Campus data have been saved"));
  return Campus;
};
