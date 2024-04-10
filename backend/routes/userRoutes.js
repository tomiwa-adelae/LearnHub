import express from "express";
import {
	authUser,
	registerUser,
	registerLecturer,
	logoutUser,
	updateUser,
	updatePassword,
	resetPassword,
	verifyCode,
	updateNewPassword,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/lecturer").post(registerLecturer);
router.post("/auth", authUser);
router.route("/profile").put(protect, updateUser);
router.route("/password").put(protect, updatePassword);
router.post("/logout", logoutUser);
router.route("/reset-password").post(resetPassword);
router.route("/verify-code").post(verifyCode);
router.route("/update-password/:id/:code").post(updateNewPassword);

export default router;
