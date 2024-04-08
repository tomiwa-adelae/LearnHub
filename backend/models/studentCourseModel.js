import mongoose from "mongoose";

const studentCourseSchema = new mongoose.Schema(
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
	},
	{ timestamps: true }
);

const StudentCourse = mongoose.model("StudentCourse", studentCourseSchema);

export default StudentCourse;
