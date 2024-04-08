import asyncHandler from "express-async-handler";

import PDF from "../models/pdfModel.js";

// Desc Get all pdf for logged in user
// @route GET /api/pdfs/
// @access Private
const getAllPdfs = asyncHandler(async (req, res) => {
	const pdfs = await PDF.find()
		.sort({
			createdAt: -1,
		})
		.populate("user");

	res.json(pdfs);
});

// Desc Get all pdf for logged in user and that particular course with the id
// @route GET /api/pdfs/:id
// @access Private
const getPdfsById = asyncHandler(async (req, res) => {
	const pdfs = await PDF.find({ courseId: req.params.id })
		.sort({
			createdAt: -1,
		})
		.populate("user");

	res.json(pdfs);
});

export { getPdfsById, getAllPdfs };
