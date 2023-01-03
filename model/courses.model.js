module.exports = (sequelize, Sequelize) => {
  const Courses = sequelize.define("courses", {
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
    courseCode: {
      type: Sequelize.STRING,
    },
    slot: {
      type: Sequelize.INTEGER,
    },
  });
  return Courses;
};
