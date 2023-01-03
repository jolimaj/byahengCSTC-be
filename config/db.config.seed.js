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
db.roles_seeds = require("../seeders/01_roles")(sequelize, Sequelize);
db.user_seeds = require("../seeders/02_user")(sequelize, Sequelize);
db.campus_seeds = require("../seeders/03_campus")(sequelize, Sequelize);
db.survey_seeds = require("../seeders/04_survey")(sequelize, Sequelize);
db.faq_seeds = require("../seeders/05_faq")(sequelize, Sequelize);
db.course_seeds = require("../seeders/06_course")(sequelize, Sequelize);
module.exports = db;
