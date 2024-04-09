import { useEffect } from "react";
import ChatSelected from "./ChatSelected";
import NoChatSelected from "./NoChatSelected";
import { useDispatch, useSelector } from "react-redux";
import { resetMessages, setConversation } from "../slices/conversationSlice";

const MessageContainer = () => {
	const { selectedConversation } = useSelector((state) => state.conversation);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(setConversation(null));
			dispatch(resetMessages());
		};
	}, [setConversation]);

	return (
		<div className="message-container">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<ChatSelected selectedConversation={selectedConversation} />
			)}
		</div>
	);
};

export default MessageContainer;
