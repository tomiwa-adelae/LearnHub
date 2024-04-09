import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const ChatSkeleton = () => {
	return (
		<>
			<div className="chat-skeleton">
				<div className="img"></div>
				<div className="details"></div>
			</div>
			<div className="chat-skeleton">
				<div className="img"></div>
				<div className="details"></div>
			</div>
			<div className="chat-skeleton mine">
				<div className="img">tomiwa</div>
				<div className="details"></div>
			</div>
		</>
	);
};

export default ChatSkeleton;
