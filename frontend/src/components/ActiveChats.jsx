import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const ActiveChats = () => {
	return (
		<div className="active-chats">
			<h4 className="text-primary">Active now</h4>
			<div className="chats">
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
				<div className="chat">
					<FaCircleUser />
				</div>
			</div>
		</div>
	);
};

export default ActiveChats;
