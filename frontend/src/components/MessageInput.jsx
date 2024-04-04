import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
	return (
		<div className="message-input">
			<form>
				<div>
					<input type="text" placeholder="Type your message..." />
				</div>
				<button className="btn btn-white btn-input">
					Send <IoSendSharp />
				</button>
			</form>
		</div>
	);
};

export default MessageInput;
