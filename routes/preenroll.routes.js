const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/pre_enroll");

router.get("/", model.findAll);
module.exports = router;
