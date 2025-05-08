const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

// we bring bootcamp model to pass it to middleware
const Bootcamp = require("../models/Bootcamp");
// bring middleware
const advancedResults = require("../middlewares/advancedResults");


const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

// include other resource routers
const courseRouter = require("./courses");
// Re-Route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

// Re-Route into other resource routers
const reviewRouter = require("./reviews");
router.use("/:bootcampId/reviews", reviewRouter);

router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), bootcampPhotoUpload);

router
  .route("/")
  .get(
    advancedResults(Bootcamp, { path: "courses", select: "title description" }),
    getBootcamps
  ) // adding middleware
  // .get(advancedResults(Bootcamp,'courses'),getBootcamps) // adding middleware
  .post(protect, authorize("publisher", "admin"), createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, authorize("publisher", "admin"), updateBootcamp)
  .delete(protect, authorize("publisher", "admin"), deleteBootcamp);

module.exports = router;
