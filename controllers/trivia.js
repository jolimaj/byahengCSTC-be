const db = require("../config/db.config");
const Trivia = db.trivia;
const User = db.users;
const cloudinary = require("../validation/cloudinary");

const TriviaController = {
  findAll: async (req, res) => {
    Trivia.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  getByID: async (req, res) => {
    Trivia.findByPk(req.params.id)
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addTrivia: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    User.findOne({ where: { email: session.email } }).then((data) => {
      Trivia.findOne({ where: { name: req.body.name } }).then((values) => {
        if (values === null) {
          cloudinary.uploader.upload(
            req.file.path,
            {
              folder: "trivia",
            },
            (err, result) => {
              const value = {
                userID: data.id,
                images: result.secure_url,
                ...req.body,
              };
              Trivia.create(value)
                .then((data) => {
                  res.json({
                    message: "Successfully uploaded files",
                    data,
                  });
                })
                .catch((error) =>
                  res.status(400).send({
                    message: `Unable to save data! ${error}`,
                    status: 400,
                  })
                );
            }
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
  updateTrivia: async (req, res) => {
    Trivia.update(req.body, { where: { id: req.params.id } })
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
  deleteTrivia: async (req, res) => {
    Trivia.destroy({ where: { id: req.params.id } })
      .then((data) => res.send({ message: "Successfully deleted!" }))
      .catch((error) =>
        res.status(400).send({
          message: error.errors,
          status: 400,
        })
      );
  },
};
module.exports = TriviaController;
