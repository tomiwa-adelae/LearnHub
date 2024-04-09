import asyncHandler from "../middleware/asyncHandler.js";
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

// Desc Get all message between 2 users with the id
// @route GET /api/messages/:id
// @access Private
const getMessages = asyncHandler(async (req, res) => {
	const receiverId = req.params.id;
	const senderId = req.user.id;

	const conversation = await Conversation.findOne({
		participants: { $all: [senderId, receiverId] },
	}).populate("messages");

	if (!conversation) return res.status(200).json([]);

	const messages = conversation.messages;

	res.status(200).json(messages);
});

// Desc Send a message to a user with the id
// @route POST /api/messages/:id
// @access Private
const sendMessage = asyncHandler(async (req, res) => {
	const message = req.body.message;

	const receiverId = req.params.id;
	const senderId = req.user.id;

	let conversation = await Conversation.findOne({
		participants: { $all: [senderId, receiverId] },
	});

	if (!conversation) {
		conversation = await Conversation.create({
			participants: [senderId, receiverId],
		});
	}

	const newMessage = new Message({ senderId, receiverId, message });

	if (newMessage) {
		conversation.messages.push(newMessage._id);
	}

	await Promise.all([conversation.save(), newMessage.save()]);

	// SOCKET IO FUNCTIONALITY GOES HERE

	res.status(201).json(newMessage);
});

export { getMessages, sendMessage };
