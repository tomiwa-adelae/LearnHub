import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAllConversationsMutation } from "../slices/conversationApiSlice";
import { getConversations } from "../slices/conversationSlice";
import Conversation from "./Conversation";
import { ToastErrorMessage, ToastSuccessMessage } from "./ToastMessage";
import ConversationSkeleton from "./ConversationSkeleton";

const Conversations = () => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { conversations } = useSelector((state) => state.conversation);

	const [allConversations, { isLoading }] = useAllConversationsMutation();

	useEffect(() => {
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
	}, []);

	return (
		<div className="conversations">
			{!isLoading &&
				conversations.map((conversation) => (
					<Conversation
						key={conversation._id}
						conversation={conversation}
					/>
				))}

			{isLoading &&
				[...Array(4)].map((_, idx) => (
					<ConversationSkeleton key={idx} />
				))}

			{!isLoading && conversations.length === 0 && (
				<ToastSuccessMessage message={"There are no users!"} />
			)}

			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</div>
	);
};

export default Conversations;
