import { FaCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { extractTime } from "../utils/extractTime";

const Message = ({ selectedConversation, message }) => {
	const { userInfo } = useSelector((state) => state.auth);

	const fromMe = message.senderId === userInfo._id;
	const chatDirection = fromMe ? "message-mine" : "";
	const formattedTime = extractTime(message.createdAt);
	const bgColor = fromMe ? "#c08552" : "#5279c0";

	return (
		<div className={`message ${chatDirection}`}>
			{!fromMe && (
				<img
					src={selectedConversation.profilePicture}
					alt={selectedConversation.name}
					className="user-icon"
				/>
			)}
			<div style={{ backgroundColor: bgColor }} className="chat-details">
				<p>{message.message}</p>
				<small>{formattedTime}</small>
			</div>
		</div>
	);
};

export default Message;
