module.exports = (sequelize, Sequelize) => {
  const PreEnroll = sequelize.define("pre_enroll", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
    },
    birthdate: {
      type: Sequelize.DATE,
    },
    courseID: {
      type: Sequelize.INTEGER,
    },
    campusID: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.BOOLEAN,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    guardian: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.TEXT,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    school_last_attended: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.TEXT,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
  });
  return PreEnroll;
};
