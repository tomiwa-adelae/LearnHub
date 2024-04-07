import express from "express";
import { getPdfs } from "../controllers/pdfController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getPdfs);

export default router;
