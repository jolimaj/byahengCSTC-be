const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/campus");
const upload = require("../validation/upload");

router.get("/", model.findAll);
router.get("/:id", model.getByID);
router.post("/", upload.single("images"), model.addCampus);
router.put("/:id", model.updateCampus);
router.delete("/:id", model.deleteCampus);

module.exports = router;
