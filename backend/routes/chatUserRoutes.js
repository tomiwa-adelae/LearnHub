import express from "express";
import { getChatUsers } from "../controllers/chatUserController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getChatUsers);

export default router;
