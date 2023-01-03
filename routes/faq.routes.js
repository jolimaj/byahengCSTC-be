const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/faq");
const mw = require("../validation/validate");

router.get("/", model.findAll);
router.post("/", mw.validateFaq, model.addFaq);
router.put("/:id", mw.validateFaq, model.updateFaq);
router.delete("/:id", model.deleteFaq);

module.exports = router;
