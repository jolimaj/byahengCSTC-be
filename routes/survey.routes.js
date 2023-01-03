const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/survey");

router.get("/", model.findAll);
router.get("/counts", model.countAll);
router.post("/", model.addSurvey);
router.put("/:id", model.updateSurvey);

module.exports = router;
