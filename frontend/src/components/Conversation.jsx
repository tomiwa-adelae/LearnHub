import React from "react";
import { useDispatch } from "react-redux";
import { setConversation } from "../slices/conversationSlice";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation }) => {
	const dispatch = useDispatch();

	const { onlineUsers } = useSocketContext();

	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<div
			onClick={() => dispatch(setConversation(conversation))}
			className="conversation"
		>
			<div className="img">
				<img
					src={conversation.profilePicture}
					alt={conversation.name}
				/>
				<div className={isOnline ? "online" : ""}></div>
			</div>
			<div className="details">
				<h5>{conversation.name}</h5>
				<small>12:30</small>
			</div>
		</div>
	);
};

export default Conversation;
