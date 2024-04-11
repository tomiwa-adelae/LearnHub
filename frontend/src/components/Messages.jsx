import Message from "./Message";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAllMessagesMutation } from "../slices/conversationApiSlice";
import { getMessages } from "../slices/conversationSlice";
import ScrollToBottom from "./ScrollToBottom";
import ChatSkeleton from "./ChatSkeleton";
import listenMessages from "../context/listenMessages";

const Messages = ({ selectedConversation }) => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { messages } = useSelector((state) => state.conversation);

	const [allMessages, { isLoading }] = useAllMessagesMutation();

	listenMessages();

	useEffect(() => {
		async function fetchMessages() {
			try {
				setShowAlertMessage(null);
				const res = await allMessages(selectedConversation._id);
				dispatch(getMessages(res.data));
			} catch (error) {
				setShowAlertMessage(error.data.message);
			}
		}

		fetchMessages();
	}, [selectedConversation]);

	return (
		<div className="messages">
			{!isLoading &&
				messages.length > 0 &&
				messages.map((message) => (
					<Message
						key={message._id}
						message={message}
						selectedConversation={selectedConversation}
					/>
				))}
			<ScrollToBottom />

			{isLoading &&
				[...Array(2)].map((_, idx) => <ChatSkeleton key={idx} />)}

			{!isLoading && messages.length === 0 && (
				<h6>Send a message to start the conversation</h6>
			)}
		</div>
	);
};

export default Messages;
