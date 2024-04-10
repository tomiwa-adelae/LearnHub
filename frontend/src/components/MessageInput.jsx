import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useSendMessageMutation } from "../slices/conversationApiSlice";
import { createMessage, getMessages } from "../slices/conversationSlice";
import { SmallLoader } from "./Loader";

const MessageInput = ({ selectedConversation }) => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const [message, setMessage] = useState("");

	const [sendMessage, { isLoading }] = useSendMessageMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setShowAlertMessage(null);

			const res = await sendMessage({
				message,
				id: selectedConversation._id,
			}).unwrap();

			dispatch(createMessage(res));
			setShowAlertMessage(null);
			setMessage("");
		} catch (error) {
			setShowAlertMessage(error.data.message);
			console.log(error);
		}
	};

	return (
		<div className="message-input">
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						placeholder="Type your message..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<button
					disabled={isLoading}
					className="btn btn-white btn-input"
				>
					{isLoading ? (
						<>
							Sending <IoIosSend />
						</>
					) : (
						<>
							Send <IoSendSharp />
						</>
					)}
				</button>
			</form>
		</div>
	);
};

export default MessageInput;
