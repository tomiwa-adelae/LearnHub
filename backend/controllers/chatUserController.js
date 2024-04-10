import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// Desc Get all users for the chat side bar except the logged in user
// @route GET /api/chat-users
// @access Private
const getChatUsers = asyncHandler(async (req, res) => {
	const chatUsers = await User.find({ _id: { $ne: req.user.id } })
		.select("-password")
		.sort({ createdAt: -1 });

	res.status(200).json(chatUsers);
});

export { getChatUsers };
