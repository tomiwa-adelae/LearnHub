import ChatSideBar from "../components/ChatSideBar";
import MessageContainer from "../components/MessageContainer";
import Meta from "../components/Meta";

const ChatPage = () => {
	return (
		<>
			<Meta title="Chat | LearnHub" />
			<div className="chatpage">
				<div className="wrapper">
					<div className="container">
						<ChatSideBar />
						<MessageContainer />
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatPage;
