const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/trivia");
const upload = require("../validation/upload");

router.get("/", model.findAll);
router.get("/:id", model.getByID);
router.post("/", upload.single("images"), model.addTrivia);
router.put("/:id", model.updateTrivia);
router.delete("/:id", model.deleteTrivia);

module.exports = router;
