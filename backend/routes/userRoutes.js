import express from "express";
import {
	authUser,
	registerUser,
	registerLecturer,
	logoutUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/lecturer").post(registerLecturer);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

export default router;
