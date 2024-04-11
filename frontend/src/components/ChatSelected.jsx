import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useDispatch } from "react-redux";
import { getConversations, setConversation } from "../slices/conversationSlice";
import { useAllConversationsMutation } from "../slices/conversationApiSlice";
import { ToastErrorMessage } from "./ToastMessage";
import { IoArrowBack } from "react-icons/io5";

const ChatSelected = ({ selectedConversation }) => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const [allConversations] = useAllConversationsMutation();

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();

				dispatch(setConversation(null));

				async function fetchConversations() {
					try {
						setShowAlertMessage(null);
						const res = await allConversations();
						dispatch(getConversations(res.data));
					} catch (error) {
						setShowAlertMessage(error.data.message);
					}
				}

				fetchConversations();
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	return (
		<>
			<div className="chat-selected">
				<div className="header">
					<div className="details">
						<IoArrowBack
							onClick={() => dispatch(setConversation(null))}
							className="back-btn"
						/>
						<img
							src={selectedConversation.profilePicture}
							alt={selectedConversation.name}
						/>
						<h5>{selectedConversation.name}</h5>
					</div>
				</div>
				<div className="message-wrapper">
					<Messages selectedConversation={selectedConversation} />
					<MessageInput selectedConversation={selectedConversation} />
				</div>
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default ChatSelected;
