import path from "path";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import lecturerCourseRoutes from "./routes/lecturerCourseRoutes.js";
import studentCourseRoutes from "./routes/studentCourseRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// Express body parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		credentials: true,
		origin: "http://localhost:5173",
	})
);

// Allowing cookie to pass from the client/frontend
app.use(cookieParser());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/student-courses", studentCourseRoutes);
app.use("/api/lecturer-courses", lecturerCourseRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/pdfs", pdfRoutes);

app.get("/", (req, res) => {
	res.send("API up & running...");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}...`));
