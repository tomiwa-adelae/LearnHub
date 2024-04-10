import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import Conversation from "./models/conversationModel.js";
import Course from "./models/courseModel.js";
import Message from "./models/messageModel.js";
import Pdf from "./models/pdfModel.js";
import StudentCourseModel from "./models/studentCourseModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const destroyData = async () => {
	try {
		await Conversation.deleteMany();
		await Course.deleteMany();
		await Message.deleteMany();
		await Pdf.deleteMany();
		await StudentCourseModel.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed!");
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	// importData();
	console.log("Import data!");
}
