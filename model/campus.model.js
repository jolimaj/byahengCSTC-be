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
    images: {
      type: Sequelize.TEXT,
    },
  });
  return Campus;
};
