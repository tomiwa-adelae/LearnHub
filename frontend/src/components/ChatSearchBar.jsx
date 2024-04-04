import React from "react";
import { IoSendSharp } from "react-icons/io5";

const ChatSearchBar = () => {
	return (
		<div className="chat-search-bar">
			<form>
				<div>
					<input type="text" placeholder="Search chats..." />
				</div>
				<button className="btn btn-white btn-input">
					Search <IoSendSharp />
				</button>
			</form>
		</div>
	);
};

export default ChatSearchBar;
