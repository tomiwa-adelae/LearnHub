import MessageInput from "./MessageInput";
import MessageSearchBar from "./MessageSearchBar";
import { FaCircleUser } from "react-icons/fa6";
import Messages from "./Messages";

const ChatSelected = () => {
	return (
		<div className="chat-selected">
			<div className="header">
				<div className="details">
					<FaCircleUser />
					<h5>John Doe</h5>
				</div>
				<MessageSearchBar />
			</div>
			<div className="message-wrapper">
				<Messages />
				<MessageInput />
			</div>
		</div>
	);
};

export default ChatSelected;
