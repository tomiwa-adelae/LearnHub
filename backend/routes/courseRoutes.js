import express from "express";
import {
	getCourses,
	createCourse,
	getCourseById,
} from "../controllers/courseController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getCourses).post(protect, createCourse);
router.route("/:id").get(protect, getCourseById);

export default router;
