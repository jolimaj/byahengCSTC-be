const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/contact");

router.post("/", model.sendContact);

module.exports = router;
