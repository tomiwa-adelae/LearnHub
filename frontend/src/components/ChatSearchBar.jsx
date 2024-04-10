import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getConversations } from "../slices/conversationSlice";
import { useAllConversationsMutation } from "../slices/conversationApiSlice";
import { ToastErrorMessage } from "./ToastMessage";

const ChatSearchBar = () => {
	const dispatch = useDispatch();

	const [search, setSearch] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { conversations } = useSelector((state) => state.conversation);
	const [allConversations] = useAllConversationsMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!search) {
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
		} else {
			let searchResult = conversations.filter((e) =>
				Object.values(e)
					.map((e) => String(e).toLowerCase())
					.some((e) => e.includes(search))
			);

			dispatch(getConversations(searchResult));
			setSearch("");
		}
	};

	return (
		<>
			<div className="chat-search-bar">
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="text"
							placeholder="Search chats..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
					<button className="btn btn-white btn-input">
						Search <IoSendSharp />
					</button>
				</form>
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default ChatSearchBar;
