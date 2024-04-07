import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		courseId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Course",
		},
		pdfTitle: {
			type: String,
			required: true,
		},
		pdfMaterial: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const PDF = mongoose.model("PDF", pdfSchema);

export default PDF;
