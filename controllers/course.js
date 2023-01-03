const db = require("../config/db.config");
const Course = db.courses;
const User = db.users;

const CourseController = {
  findAll: async (req, res) => {
    Course.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  getByID: async (req, res) => {
    Course.findByPk(req.params.id)
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  addCourse: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    User.findOne({ where: { email: session.email } }).then((data) => {
      const value = {
        userID: data.id,
        ...req.body,
      };
      Course.findOne({ where: { name: req.body.name } }).then((values) => {
        if (values === null) {
          Course.create(value)
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
  updateCourse: async (req, res) => {
    Course.update(req.body, { where: { id: req.params.id } })
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
  deleteCourse: async (req, res) => {
    Course.destroy({ where: { id: req.params.id } })
      .then((data) => res.send({ message: "Successfully deleted!" }))
      .catch((error) =>
        res.status(400).send({
          message: error.errors,
          status: 400,
        })
      );
  },
};
module.exports = CourseController;
