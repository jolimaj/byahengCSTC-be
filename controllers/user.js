const db = require("../config/db.config");
const User = db.users;
const Visitor = db.visitors;
const {
  comparePassword,
  securePassword,
} = require("../validation/securePassword");
const Email = require("./email");
const OTP = require("./otp");
const uuid = require("uuid").v4;

const UserController = {
  countVisitor: async (req, res) => {
    Visitor.findAll({
      raw: true,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    })
      .then((data) => {
        Visitor.count({
          where: {
            date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
          },
        })
          .then((item) => {
            let payload = [];
            data.map((items) => {
              const val = {
                date: `${new Date(items.createdAt).getHours()}:${new Date(
                  items.createdAt
                ).getMinutes()}`,
                value: item,
              };
              if (item > 0) {
                payload.push(val);
              } else {
                payload = [];
              }
            });
            res.json(payload);
          })
          .catch((error) =>
            res.status(400).send({
              message: "Empty Record",
              status: 400,
            })
          );
      })
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  findAll: async (req, res) => {
    User.findAll({
      where: {
        id: {
          [db.Sequelize.Op.ne]: 1,
        },
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  setPassword: async (req, res) => {
    const request = {
      password: securePassword(req.body.password),
    };
    User.update(request, {
      where: { id: req.params.id },
    })
      .then((data) => {
        console.log("🚀 ~ file: user.js ~ line 29 ~ .then ~ data", data);
        res.send({ message: "Welcome to CSTC!", data: data });
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
  updateStatus: async (req, res) => {
    let value, message, subject, link;
    User.findOne({ where: { id: req.params.id } })
      .then((data) => {
        const userData = data;
        if (userData.status === 0) {
          value = { status: 1 };
          message = `${userData.first_name},access was granted!`;
          subject = "Welcome to Byaheng CSTC!";
          link = `${
            data.roleID > 1 ? process.env.MAIN_URL : process.env.ADMIN_URL
          }/signin/password-setup/${data.id}/${uuid()}`;
        } else {
          value = { status: 2 };
          message = `${userData.first_name}, access was removed!`;
          subject = "Account Rejected Notification";
        }
        User.update(value, { where: { id: userData.id } })
          .then((data) => {
            Email.send(userData.email, message, subject, link, false);
            res.send({ message: message });
          })
          .catch((error) =>
            res.status(400).send({
              message: `Unable to update data!`,
              status: 400,
            })
          );
        OTP.saveOTP({ userID: data.id, otp: link });
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
  addAdmin: async (req, res) => {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (data) {
          res.status(400).send({
            error: ["This email address is already been taken!"],
            status: 400,
          });
        } else {
          const request = {
            ...req.body,
            roleID: 1,
            status: 1,
          };
          User.create(request)
            .then((data) => {
              const message = `${data.first_name}! You got a admin invitation from BYAHENG CSTC!`;
              const subject = "Welcome to Byaheng CSTC!";
              const link = `${
                data.roleID > 1 ? process.env.MAIN_URL : process.env.ADMIN_URL
              }/signin/password-setup/${data.id}/${uuid()}`;
              OTP.saveOTP({ userID: data.id, link: true });
              Email.send(data.email, message, subject, link, false);
              res.send({
                message: "The invitation was sent in your email!",
                data,
              });
            })
            .catch((error) =>
              res.status(400).send({
                error: `Unable to save data!, ${error}`,
                status: 400,
              })
            );
        }
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
  registerUser: async (req, res) => {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (data) {
          res.status(400).send({
            error: ["This email address is already been taken!"],
            status: 400,
          });
        } else {
          const request = {
            ...req.body,
            status: 0,
          };
          User.create(request)
            .then((data) => {
              res.send({ message: "Visit your email!", data });
            })
            .catch((error) =>
              res.status(400).send({
                error: `Unable to save data!`,
                status: 400,
              })
            );
        }
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
  updateLoggedStatus: async (id) => {
    User.findOne({ where: { id: id } }).then((data) => {
      const userData = data;
      const val = userData.isLoggedIn ? false : true;
      User.update({ isLoggedIn: val }, { where: { id: userData.id } });
    });
  },
  loginUser: async (req, res) => {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (data) {
          const password = comparePassword(req.body.password, data.password);
          if (!password) {
            res.status(400).send({
              message: "Invalid password",
              status: 400,
            });
          } else {
            if (data.status > 0) {
              req.session.loggedin = true;
              req.session.email = data.email;
              req.session.time_in = Date.now();
              console.log("🚀 ~ file: user.js ~ line 178 ~ .then ~ data", data);
              if (data.roleID === 3) {
                Visitor.create({ userID: data.id, date: new Date() });
              }
              const data1 = UserController.updateLoggedStatus(data.id, true);
              res.status(200).send({
                message: "Succesfully Login",
                status: 200,
                data: data,
                session: req.session,
              });
              req.session.save();
            } else {
              res.status(400).send({
                message: "This account was suspended",
                status: 400,
              });
            }
          }
        } else {
          res.status(400).send({
            message: "Invalid email address",
            status: 400,
          });
        }
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
  passwordReset: async (req, res) => {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        OTP.sendOTP(data.id);
        const link = `${
          data.roleID > 1 ? process.env.MAIN_URL : process.env.ADMIN_URL
        }/signin/password-reset/${data.id}/${uuid()}`;
        OTP.saveOTP({ userID: data.id, link: link });
        const message = `${data.first_name},`;
        const subject = "Reset Password";
        res.send({
          message: "Reset password link was sent on your email!",
          data,
        });
        Email.send(data.email, message, subject, link, true);
      })
      .catch((error) =>
        res.status(400).send({
          message: "Email was not exist!",
          status: 400,
        })
      );
  },
  logoutUser: async (req, res) => {
    UserController.updateLoggedStatus(req.params.id, false);
    req.session.destroy();
    res.json("Successfully Logout");
  },
};
module.exports = UserController;
