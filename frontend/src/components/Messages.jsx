import { FaCircleUser } from "react-icons/fa6";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAllMessagesMutation } from "../slices/conversationApiSlice";
import { getMessages } from "../slices/conversationSlice";
import { LargeLoader } from "./Loader";
import ScrollToBottom from "./ScrollToBottom";

const Messages = ({ selectedConversation }) => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { messages } = useSelector((state) => state.conversation);

	const [allMessages, { isLoading }] = useAllMessagesMutation();

	useEffect(() => {
		async function fetchMessages() {
			try {
				setShowAlertMessage(null);
				const res = await allMessages(selectedConversation._id);
				dispatch(getMessages(res.data));
			} catch (error) {
				// setShowAlertMessage(error.data.message);
				console.log(error);
			}
		}

		fetchMessages();
	}, [selectedConversation]);

	return (
		<div className="messages">
			{isLoading && <LargeLoader />}
			{messages.map((message) => (
				<Message
					key={message._id}
					message={message}
					selectedConversation={selectedConversation}
				/>
			))}
			<ScrollToBottom />

			{/* <div className="message">
				<FaCircleUser className="user-icon" />
				<div className="chat-details">
					<p>Lorem.</p>
					<small>12:90</small>
				</div>
			</div>
			<div className="message message-mine">
				<FaCircleUser className="user-icon" />
				<div className="chat-details">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id doloremque aut ad odit.
					</p>
					<small>12:90</small>
				</div>
			</div>
			<div className="message message-mine">
				<FaCircleUser className="user-icon" />
				<div className="chat-details">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id doloremque aut ad odit, atque quia sit consequatur
						ipsum minima dolor porro? Fugiat quis accusamus libero
						fuga facere aspernatur sapiente vero.
					</p>
					<small>12:90</small>
				</div>
			</div>
			<div className="message">
				<FaCircleUser className="user-icon" />
				<div className="chat-details">
					<p>Lorem.</p>
					<small>12:90</small>
				</div>
			</div>
			<div className="message">
				<FaCircleUser className="user-icon" />
				<div className="chat-details">
					<p>Lorem.</p>
					<small>12:90</small>
				</div>
			</div> */}
		</div>
	);
};

export default Messages;
