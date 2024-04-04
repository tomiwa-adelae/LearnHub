import ActiveChats from "./ActiveChats";
import ChatSearchBar from "./ChatSearchBar";
import Conversations from "./Conversations";

const ChatSideBar = () => {
	return (
		<div className="chat-side-bar">
			<ChatSearchBar />
			<div className="conversation-wrapper">
				<ActiveChats />
				<Conversations />
			</div>
		</div>
	);
};

export default ChatSideBar;
