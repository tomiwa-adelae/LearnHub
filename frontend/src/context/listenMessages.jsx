import { useEffect } from "react";

import { useSocketContext } from "./SocketContext";
import { useDispatch } from "react-redux";
import { createMessage } from "../slices/conversationSlice";
import notificationSound from "../assets/notification.mp3";

const listenMessages = () => {
	const { socket } = useSocketContext();
	const dispatch = useDispatch();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			const sound = new Audio(notificationSound);
			sound.play();
			dispatch(createMessage(newMessage));
		});

		return () => socket?.off("newMessage");
	}, [socket, createMessage]);
};

export default listenMessages;
