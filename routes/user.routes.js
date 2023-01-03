const router = require("express").Router({ mergeParams: true });
const preEnroll = require("../controllers/pre_enroll");
const model = require("../controllers/user");
const mw = require("../validation/validate");

router.post("/pre_enrollment", preEnroll.add);
router.get("/pre_enrollment/count", preEnroll.count);
router.get("/", model.findAll);
router.get("/count", model.countVisitor);

module.exports = router;
