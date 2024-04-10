import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setConversation } from "../slices/conversationSlice";
import { useSocketContext } from "../context/SocketContext";

const ActiveChats = () => {
	const dispatch = useDispatch();

	const [activeUsers, setActiveUsers] = useState([]);

	const { conversations } = useSelector((state) => state.conversation);

	const { onlineUsers } = useSocketContext();

	useEffect(() => {
		const actives = conversations.filter((item) =>
			onlineUsers.includes(item._id)
		);

		setActiveUsers(actives);
	}, [conversations, onlineUsers]);

	return (
		<div className="active-chats">
			<h4 className="text-primary">Active now</h4>
			<div className="chats">
				{activeUsers.map((user) => (
					<div
						onClick={() => dispatch(setConversation(user))}
						key={user._id}
						className="chat"
					>
						<div className="img">
							<img src={user.profilePicture} alt={user.name} />
							<div className="online"></div>
						</div>
					</div>
				))}
			</div>
			{activeUsers.length === 0 && (
				<div className="no-online">
					<h6>Currently, nobody is online.</h6>
				</div>
			)}
		</div>
	);
};

export default ActiveChats;
