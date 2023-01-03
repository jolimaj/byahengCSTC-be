const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/activities");
const upload = require("../validation/upload");

router.get("/", model.findAllData);
router.get("/:id", model.findAll);
router.get("/:id", model.getByID);
router.post("/", upload.single("images"), model.addActivity);
router.put("/:id", model.updateActivity);
router.delete("/:id", model.deleteActivity);

module.exports = router;
