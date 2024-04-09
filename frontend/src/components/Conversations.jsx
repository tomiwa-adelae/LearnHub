import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useAllConversationsMutation } from "../slices/conversationApiSlice";
import { getConversations } from "../slices/conversationSlice";
import Conversation from "./Conversation";
import { LargeLoader } from "./Loader";
import { ToastErrorMessage } from "./ToastMessage";

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
			{isLoading && <LargeLoader />}

			{conversations.map((conversation) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
				/>
			))}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</div>
	);
};

export default Conversations;
