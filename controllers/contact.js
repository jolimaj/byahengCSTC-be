const db = require("../config/db.config");
const Email = require("./email");
const Contact = db.contacts;

const ContactController = {
  findAll: async (req, res) => {
    Contact.findAll()
      .then((data) => res.json(data))
      .catch((error) =>
        res.status(400).send({
          message: "Empty Record",
          status: 400,
        })
      );
  },
  sendContact: async (req, res) => {
    const value = {
      date: Date.now(),
      ...req.body,
    };
    Contact.create(value)
      .then((data) => {
        Email.contactUS(req.body);
        res.send({ message: "Successfully added!", data });
      })
      .catch((error) =>
        res.status(400).send({
          message: error,
          status: 400,
        })
      );
  },
};
module.exports = ContactController;
