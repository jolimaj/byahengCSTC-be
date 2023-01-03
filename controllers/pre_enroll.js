const db = require("../config/db.config");
const PreEnroll = db.pre_enroll;
const User = db.users;
const Campus = db.campus;
const Course = db.courses;

const PreEnrollController = {
  findAll: async (req, res) => {
    PreEnroll.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  count: async (req, res) => {
    PreEnroll.count({
      where: {
        date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      },
    })
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  add: async (req, res) => {
    const session = JSON.parse(
      req.sessionStore.sessions[Object.keys(req.sessionStore.sessions)[0]]
    );
    console.log("🚀 ~ file: pre_enroll.js ~ line 23 ~ add: ~ session", session);
    User.findOne({ where: { email: session.email } })
      .then((data) => {
        const request = {
          userID: data.id,
          date: new Date(),
          guardian: `${req.body.first_name} ${req.body.last_name}`,
          ...req.body,
        };
        PreEnroll.create(request)
          .then((enrollData) => {
            Campus.findOne({ where: { id: enrollData.campusID } })
              .then((campusData) => {
                Course.findOne({ where: { id: enrollData.courseID } })
                  .then((courseData) => {
                    res.send({
                      message: "Successfull Saved!",
                      data: {
                        first_name: data.first_name,
                        middle_name: data.middle_name,
                        last_name: data.last_name,
                        birthdate: enrollData.birthdate,
                        email: data.email,
                        phone: data.mobile,
                        gender: enrollData === 0 ? "Female" : "Male",
                        address: enrollData.address,
                        mobile: enrollData.mobile,
                        enroll_as:
                          enrollData.status === 0
                            ? "New Student"
                            : "Old Student",
                        school_last_attended: enrollData.school_last_attended,
                        campus: campusData.name,
                        course: courseData.name,
                        comment: enrollData.note,
                        guardian: request.guardian,
                      },
                    });
                  })
                  .catch((error) =>
                    res.status(400).send({
                      error: [`Unable to save data!:${error}`],
                      status: 400,
                    })
                  );
              })
              .catch((error) =>
                res.status(400).send({
                  error: [`Unable to save data!:${error}`],
                  status: 400,
                })
              );
          })
          .catch((error) => {
            return res.status(400).send({
              error: [`Unable to save data!:${error}`],
              status: 400,
            });
          });
      })
      .catch((error) =>
        res.status(400).send({
          message: [`error`, error],
          status: 400,
        })
      );
  },
};
module.exports = PreEnrollController;
