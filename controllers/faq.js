const db = require("../config/db.config");
const Faq = db.faq;
const User = db.users;

const FaqController = {
  findAll: async (req, res) => {
    Faq.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addFaq: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    User.findOne({ where: { email: session.email } }).then((data) => {
      const value = {
        userID: data.id,
        ...req.body,
      };
      Faq.findOne({ where: { question: req.body.question } }).then((values) => {
        if (values === null) {
          Faq.create(value)
            .then((data) => res.send({ message: "Successfully added!", data }))
            .catch((error) =>
              res.status(400).send({
                message: `Unable to save data!`,
                status: 400,
              })
            );
        } else {
          res.status(400).send({
            message: `${req.body.name} is already exist!`,
            status: 400,
          });
        }
      });
    });
  },
  updateFaq: async (req, res) => {
    Faq.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        res.send({ message: "Successfully updated!" });
      })
      .catch((error) =>
        res.status(400).send({
          message: `Unable to update data!`,
          status: 400,
        })
      );
  },
  deleteFaq: async (req, res) => {
    Faq.destroy({ where: { id: req.params.id } })
      .then((data) => res.send({ message: "Successfully deleted!" }))
      .catch((error) =>
        res.status(400).send({
          message: error.errors,
          status: 400,
        })
      );
  },
};
module.exports = FaqController;
