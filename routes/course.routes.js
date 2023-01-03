const router = require('express').Router({ mergeParams: true })
const model = require('../controllers/course')
const mw=require('../validation/validate')

router.get("/", model.findAll);
router.get("/:id", model.getByID);
router.post("/",mw.validateCourse, model.addCourse);
router.put("/:id",mw.validateCourse, model.updateCourse);
router.delete("/:id", model.deleteCourse);

module.exports=router