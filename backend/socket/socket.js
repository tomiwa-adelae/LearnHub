import { Server } from "socket.io";
import http from "http";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = http.createServer(app);

console.log(process.env.CLIENT_URL);

const io = new Server(server, {
	cors: {
		origin: [process.env.CLIENT_URL],
		methods: ["GET", "POST", "PUT", "DELETE"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
	console.log("A user connected", socket.id);

	const userId = socket.handshake.query.userId;

	if (userId !== "undefined") userSocketMap[userId] = socket.id;

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("A user disconnected!", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };
