import { PiChatsFill } from "react-icons/pi";

const NoChatSelected = () => {
	return (
		<div className="no-chat-selected">
			<h3>
				<span className="text-primary">Learn</span>
				<span className="text-opacity">Hub</span>
			</h3>
			<h5>Connect and collaborate: Select a chat to start messaging</h5>
			<PiChatsFill />
		</div>
	);
};

export default NoChatSelected;
