import path from "path";
import express from "express";
import multer from "multer";
import Course from "../models/courseModel.js";

const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

const upload = multer({ storage: storage });

router.post("/:id", upload.single("coursePDF"), async (req, res) => {
	// console.log(req.file);

	const courseTitle = req.body.courseTitle;
	const coursePDF = req.file.filename;

	try {
		const course = await Course.findById(req.params.id);
		if (course) {
			course.coursePDFs.unshift({ courseTitle, coursePDF });

			await course.save();

			res.status(200).json({
				message: "PDF material uploaded successfully!",
			});
		} else {
			res.status(400);
			throw new Error("Internal server error! Course not found!");
		}
	} catch (error) {
		res.status(400);
		throw new Error("Internal server error! ");
	}
});

export default router;
