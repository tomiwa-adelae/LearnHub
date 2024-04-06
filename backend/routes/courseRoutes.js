import express from "express";
import {
	getCourses,
	createCourse,
	getCourseById,
	// createNewPDF,
} from "../controllers/courseController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getCourses).post(protect, createCourse);
router.route("/:id").get(protect, getCourseById);
// router.route("/new-pdf").post(protect, createNewPDF);

export default router;
