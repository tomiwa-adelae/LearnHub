import ChatSideBar from "../components/ChatSideBar";
import MessageContainer from "../components/MessageContainer";

const ChatPage = () => {
	return (
		<div className="chatpage">
			<div className="wrapper">
				<div className="container">
					<ChatSideBar />
					<MessageContainer />
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
