import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:id").get(protect, getMessages);
router.route("/:id").post(protect, sendMessage);

export default router;
