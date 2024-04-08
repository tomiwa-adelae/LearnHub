import express from "express";
import {
	getLecturerCourses,
	createLecturerCourse,
	getLecturerCourseById,
} from "../controllers/lecturerCourseController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
	.route("/")
	.get(protect, getLecturerCourses)
	.post(protect, createLecturerCourse);
router.route("/:id").get(protect, getLecturerCourseById);

export default router;
