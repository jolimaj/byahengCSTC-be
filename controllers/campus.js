const db = require("../config/db.config");
const Campus = db.campus;
const User = db.users;
const cloudinary = require("../validation/cloudinary");

const CampusController = {
  findAll: async (req, res) => {
    Campus.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  getByID: async (req, res) => {
    Campus.findByPk(req.params.id)
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addCampus: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    User.findOne({ where: { email: session.email } }).then((data) => {
      const value = {
        userID: data.id,
        ...req.body,
      };
      Campus.findOne({ where: { name: req.body.name } }).then((values) => {
        if (values === null) {
          cloudinary.uploader.upload(
            req.file.path,
            {
              folder: "campus",
            },
            (err, result) => {
              const value = {
                userID: data.id,
                images: result.secure_url,
                ...req.body,
              };
              Campus.create(value)
                .then((data) =>
                  res.send({ message: "Successfully added!", data })
                )
                .catch((error) =>
                  res.status(400).send({
                    message: `Unable to save data!`,
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
  updateCampus: async (req, res) => {
    Campus.update(req.body, { where: { id: req.params.id } })
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
  deleteCampus: async (req, res) => {
    Campus.destroy({ where: { id: req.params.id } })
      .then((data) => res.send({ message: "Successfully deleted!" }))
      .catch((error) =>
        res.status(400).send({
          message: error.errors,
          status: 400,
        })
      );
  },
};
module.exports = CampusController;
