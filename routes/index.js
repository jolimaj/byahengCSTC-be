const router = require("express").Router({ mergeParams: true });
const Course = require("./course.routes");
const Campus = require("./campus.routes");
const Faq = require("./faq.routes");
const Trivia = require("./trivia.routes");
const Survey = require("./survey.routes");
const Sign = require("./sign.routes");
const Admin = require("./admin.routes");
const User = require("./user.routes");
const Activity = require("./activity.routes");
const Contact = require("./contact.routes");
const PreEnroll = require("./preenroll.routes");

router.use("/courses", Course);
router.use("/campus", Campus);
router.use("/activities", Activity);
router.use("/faq", Faq);
router.use("/trivia", Trivia);
router.use("/survey", Survey);
router.use("/", Sign);
router.use("/admin", Admin);
router.use("/user", User);
router.use("/contact", Contact);
router.use("/pre-enrollment", PreEnroll);

module.exports = router;
