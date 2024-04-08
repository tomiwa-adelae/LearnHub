import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import multer from "multer";
import StudentCourse from "../models/studentCourseModel.js";

// Desc Get all courses
// @route GET /api/student-courses
// @access Private
const getAllCourses = asyncHandler(async (req, res) => {
	const keyword = req.query.keyword
		? {
				$or: [
					{
						courseCode: {
							$regex: req.query.keyword,
							$options: "i",
						},
					},
					{
						courseTitle: {
							$regex: req.query.keyword,
							$options: "i",
						},
					},
					{
						courseUnit: {
							$regex: req.query.keyword,
							$options: "i",
						},
					},
				],
		  }
		: {};

	const courses = await Course.find({ ...keyword })
		.sort({
			courseCode: 1,
		})
		.populate("user");

	res.json(courses);
});

// Desc Get course details with the course id
// @route GET /api/student-courses/mine
// @access Private
const getStudentCourses = asyncHandler(async (req, res) => {
	const courses = await StudentCourse.find({ user: req.user.id })
		.sort({ createdAt: -1 })
		.populate({
			path: "courseId",
			populate: { path: "user" },
		});

	if (courses) {
		res.json(courses);
	} else {
		res.status(404);
		throw new Error("Internal error occurred! Course not found!");
	}

	// console.log("Yes");
});

// Desc create courses as a student
// @route POST /api/student-courses
// @access Private
const createStudentCourse = asyncHandler(async (req, res) => {
	const { id } = req.body;

	const course = await StudentCourse.create({
		user: req.user.id,
		courseId: id,
	});

	if (course) {
		res.status(201).json({ message: "Course successfully added!" });
	} else {
		res.status(404);
		throw new Error("Internal error occurred! Course not added!");
	}
	// const course = await StudentCourse()
});

export { getAllCourses, createStudentCourse, getStudentCourses };
