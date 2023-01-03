const db = require("../config/db.config");
const Survey = db.survey;
const User = db.users;
const { Op } = require("sequelize");

const SurveyController = {
  findAll: async (req, res) => {
    Survey.findAll({
      order: [["id", "ASC"]],
    })
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  countAll: async (req, res) => {
    Survey.findAll({
      order: [["id", "ASC"]],
    })
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addSurvey: async (req, res) => {
    User.findOne({ where: { email: req.session.email } }).then((data) => {
      const value = {
        userID: data.id,
        ...req.body,
      };
      Survey.create(value)
        .then((data) => res.send({ message: "Successfully added!", data }))
        .catch((error) =>
          res.status(400).send({
            message: `Unable to save data!`,
            status: 400,
          })
        );
    });
  },
  updateSurvey: async (req, res) => {
    Survey.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send({ message: "Successfully updated!" });
      })
      .catch((error) =>
        res.status(400).send({
          message: `Unable to update data!${error}`,
          status: 400,
        })
      );
  },
};
module.exports = SurveyController;
