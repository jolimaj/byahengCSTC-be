const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER_EMAIL, //email ID
    pass: process.env.USER_PASSWORD, //Password
  },
});
const EmailController = {
  send: (email, otp, subject, link, reset) => {
    console.log("🚀 ~ file: email.js ~ line 14 ~ otp", otp);
    let templates = {};
    templates.pass = reset
      ? `
    <p>Hi,<br/>
      Forgot password?<br/>
      We received a request to reset the password for your account.<br/>
      To reset password, click the link below:<br/>
    <a href="${link}">${link}</a></p>`
      : `
    <p>Hi ${otp},<br/>
      To create your password,click the link below:<br/>
    <a href="${link}">${link}</a></p>`;
    templates.removed = `
    <p>Hi ${otp},<br/>Please contact the administrator.<br/>Thank you!</p>`;
    const mailOptions = {
      from: '"Byaheng CSTC Notification" <foo@example.com>',
      to: email,
      subject: subject,
      html: link !== undefined ? templates.pass : templates.removed,
    };
    transporter.sendMail(mailOptions);
  },
  contactUS: (data) => {
    const mailOptions = {
      from: '"Byaheng CSTC Notification" <foo@example.com>',
      to: process.env.USER_EMAIL,
      subject: data.subject,
      html: `<p>You got a message from: </p><br/>
          <ul><li>Email : ${data.email}</li>
          <li>Name: ${data.name}</li>
          <li>Message: ${data.message}</li></ul>`,
    };
    transporter.sendMail(mailOptions);
  },
};
module.exports = EmailController;
