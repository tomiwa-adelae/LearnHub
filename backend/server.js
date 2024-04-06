import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
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
app.use("/api/courses", courseRoutes);
app.use("/api/uploads", uploadRoutes);

app.get("/", (req, res) => {
	res.send("API up & running...");
});

// //multer------------------------------------------------------------
// import multer from "multer";

// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "./files");
// 	},
// 	filename: function (req, file, cb) {
// 		const uniqueSuffix = Date.now();
// 		cb(null, uniqueSuffix + file.originalname);
// 	},
// });

// const upload = multer({ storage: storage });

// app.post("/upload-files", upload.single("file"), async (req, res) => {
// 	console.log(req.file);
// 	const title = req.body.title;
// 	const fileName = req.file.filename;
// 	try {
// 		console.log(fileName);
// 		// await PdfSchema.create({ title: title, pdf: fileName });
// 		res.send({ status: "ok" });
// 	} catch (error) {
// 		res.json({ status: error });
// 	}
// });

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}...`));
