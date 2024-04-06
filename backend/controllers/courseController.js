import asyncHandler from "express-async-handler";
import Course from "../models/courseModel.js";
import multer from "multer";

// Desc Get all courses for logged in user
// @route GET /api/courses
// @access Private
const getCourses = asyncHandler(async (req, res) => {
	const courses = await Course.find({ user: req.user.id })
		.sort({
			createdAt: -1,
		})
		.populate("user");

	res.json(courses);
});

// Desc Get course details for logged in user with the id
// @route GET /api/courses/:id
// @access Private
const getCourseById = asyncHandler(async (req, res) => {
	const course = await Course.findById(req.params.id).populate("user");

	if (course) {
		res.json(course);
	} else {
		res.status(404);
		throw new Error("Internal error occurred! Course not found!");
	}
});

// Desc create courses as a lecturer
// @route POST /api/courses
// @access Private
const createCourse = asyncHandler(async (req, res) => {
	const { courseCode, courseTitle, courseUnit } = req.body;

	if (!courseCode || !courseTitle || !courseUnit) {
		res.status(400);
		throw new Error("Please enter all fields!");
	}

	// Generate random colors
	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";

		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const course = await Course.create({
		user: req.user.id,
		courseCode,
		courseTitle,
		courseUnit,
		courseColor: getRandomColor(),
	});

	if (course) {
		res.status(201).json({ message: "Course created successfully!" });
	} else {
		res.status(400);
		throw new Error("Internal server error!");
	}
});

// Desc create courses as a lecturer
// @route POST /api/courses
// @access Private

// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "files/");
// 	},
// 	filename: function (req, file, cb) {
// 		const uniqueSuffix = Date.now();
// 		cb(null, uniqueSuffix + file.originalname);
// 	},
// });

// const upload = multer({ storage: storage });

// const createNewPDF = asyncHandler(
// 	upload.single("coursePDF"),
// 	async (req, res) => {
// 		try {
// 			const fileName = req.file.filename;
// 			console.log(fileName);
// 		} catch (error) {}
// 	}
// );

export { getCourses, createCourse, getCourseById };
