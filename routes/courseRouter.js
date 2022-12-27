const express = require("express")
const router = express.Router()
const courseController = require("../controllers/courseController")

router.get("/", courseController.listCourses);
router.get("/create", courseController.createCourses);
router.post("/create", courseController.storeCourses);
router.get("/:id/edit", courseController.editCourses);
router.post("/:id/edit", courseController.updateCourses);
router.post("/:id", courseController.deleteCourses);

module.exports = router
