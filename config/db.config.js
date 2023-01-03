require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.roles = require("../model/roles.model")(sequelize, Sequelize);
db.campus = require("../model/campus.model")(sequelize, Sequelize);
db.courses = require("../model/courses.model")(sequelize, Sequelize);
db.users = require("../model/users.model")(sequelize, Sequelize);
db.faq = require("../model/faq.model")(sequelize, Sequelize);
db.survey = require("../model/survey.model")(sequelize, Sequelize);
db.trivia = require("../model/trivia.model")(sequelize, Sequelize);
db.pre_enroll = require("../model/preEnroll.model")(sequelize, Sequelize);
db.activities = require("../model/activities.model")(sequelize, Sequelize);
db.contacts = require("../model/contact.model")(sequelize, Sequelize);
db.otp = require("../model/otp.model")(sequelize, Sequelize);
db.visitors = require("../model/visitors.model")(sequelize, Sequelize);
module.exports = db;
