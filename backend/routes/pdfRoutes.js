import express from "express";
import { getPdfsById, getAllPdfs } from "../controllers/pdfController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getAllPdfs);
router.route("/:id").get(protect, getPdfsById);

export default router;
