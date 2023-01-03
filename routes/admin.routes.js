const router = require("express").Router({ mergeParams: true });
const model = require("../controllers/user");

router.put("/user/:id", model.updateStatus);
router.post("/user/add", model.addAdmin);
module.exports = router;
