import express from "express";
import {
	getAllCourses,
	createStudentCourse,
	getStudentCourses,
} from "../controllers/studentCourseController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
	.route("/")
	.get(protect, getAllCourses)
	.post(protect, createStudentCourse);
router.route("/mine").get(protect, getStudentCourses);

export default router;
