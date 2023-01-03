const { campus } = require("../config/db.config");
const db = require("../config/db.config");
const Activity = db.activities;
const User = db.users;
const Campus = db.campus;
const cloudinary = require("../validation/cloudinary");

const ActivityController = {
  findAllData: async (req, res) => {
    Activity.findAll()
      .then((value) => {
        res.json(value);
      })
      .catch((error) =>
        res.status(400).send({
          message: `Empty Record ${error}`,
          status: 400,
        })
      );
  },
  findAll: async (req, res) => {
    Activity.findAll({ where: { campus: req.params.id } })
      .then((value) => {
        res.json(value);
      })
      .catch((error) =>
        res.status(400).send({
          message: `Empty Record ${error}`,
          status: 400,
        })
      );
  },
  getByID: async (req, res) => {
    Activity.findByPk(req.params.id)
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addActivity: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    User.findOne({ where: { email: session.email } }).then((data) => {
      cloudinary.uploader.upload(
        req.file.path,
        {
          folder: "activity",
        },
        (err, result) => {
          const value = {
            userID: data.id,
            images: result.secure_url,
            ...req.body,
          };
          Activity.create(value)
            .then((data) => res.send({ message: "Successfully added!", data }))
            .catch((error) =>
              res.status(400).send({
                message: `Unable to save data!${error}`,
                status: 400,
              })
            );
        }
      );
    });
  },
  updateActivity: async (req, res) => {
    Activity.update(req.body, { where: { id: req.params.id } })
      .then((data) => {
        res.send({ message: "Successfully updated!" });
      })
      .catch((error) =>
        res.status(400).send({
          message: `Unable to update data! `,
          status: 400,
        })
      );
  },
  deleteActivity: async (req, res) => {
    Activity.destroy({ where: { id: req.params.id } })
      .then((data) => res.send({ message: "Successfully deleted!" }))
      .catch((error) =>
        res.status(400).send({
          message: error.errors,
          status: 400,
        })
      );
  },
};
module.exports = ActivityController;
