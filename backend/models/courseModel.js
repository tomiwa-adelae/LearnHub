import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		courseCode: {
			type: String,
			required: true,
		},
		courseTitle: {
			type: String,
			required: true,
		},
		courseUnit: {
			type: String,
			required: true,
		},
		courseColor: {
			type: String,
		},
		coursePDFs: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
