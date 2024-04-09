import MessageInput from "./MessageInput";
import MessageSearchBar from "./MessageSearchBar";
import Messages from "./Messages";

const ChatSelected = ({ selectedConversation }) => {
	return (
		<div className="chat-selected">
			<div className="header">
				<div className="details">
					<img
						src={selectedConversation.profilePicture}
						alt={selectedConversation.name}
					/>
					<h5>{selectedConversation.name}</h5>
				</div>
				<MessageSearchBar />
			</div>
			<div className="message-wrapper">
				<Messages selectedConversation={selectedConversation} />
				<MessageInput selectedConversation={selectedConversation} />
			</div>
		</div>
	);
};

export default ChatSelected;
