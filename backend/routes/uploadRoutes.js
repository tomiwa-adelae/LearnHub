import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + file.originalname);
	},
});

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
	console.log(req.file);
});

export default router;
