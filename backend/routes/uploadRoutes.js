import path from "path";
import express from "express";
import multer from "multer";
import Course from "../models/courseModel.js";
import { protect } from "../middleware/authMiddleware.js";
import PDF from "../models/pdfModel.js";

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

router.post("/:id", upload.single("coursePDF"), protect, async (req, res) => {
	const pdfMaterial = req.file.filename;
	const pdfTitle = req.body.pdfTitle;
	const user = req.user._id;
	const courseId = req.params.id;

	try {
		const pdf = await PDF.create({
			user,
			courseId,
			pdfTitle,
			pdfMaterial,
		});

		if (pdf) {
			res.status(201).json({ message: "PDF uploaded successfully!" });
		} else {
			res.status(400);
			throw new Error("Internal server error! PDF not uploaded!");
		}
	} catch (error) {
		res.status(400);
		throw new Error("Internal server error! ");
	}

	// console.log({ pdfMaterial, pdfTitle, user, courseId });
});

export default router;
