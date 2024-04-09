import React from "react";

import { useDispatch } from "react-redux";
import { setConversation } from "../slices/conversationSlice";

const Conversation = ({ conversation }) => {
	const dispatch = useDispatch();
	return (
		<div
			onClick={() => dispatch(setConversation(conversation))}
			className="conversation"
		>
			<img src={conversation.profilePicture} alt={conversation.name} />
			<div className="details">
				<h5>{conversation.name}</h5>
				<small>12:30</small>
			</div>
		</div>
	);
};

export default Conversation;
