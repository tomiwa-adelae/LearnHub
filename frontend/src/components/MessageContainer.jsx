import ChatSelected from "./ChatSelected";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
	return (
		<div className="message-container">
			<NoChatSelected />
			{/* <ChatSelected /> */}
		</div>
	);
};

export default MessageContainer;
