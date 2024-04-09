import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	conversations: [],
	messages: [],
	selectedConversation: null,
	newMessage: null,
};

const conversationSlice = createSlice({
	name: "conversation",
	initialState,
	reducers: {
		getConversations: (state, action) => {
			state.conversations = action.payload;
		},
		setConversation: (state, action) => {
			state.selectedConversation = action.payload;
		},
		getMessages: (state, action) => {
			state.messages = action.payload;
		},
		createMessage: (state, action) => {
			state.newMessage = action.payload;
			state.messages.push(action.payload);
		},
		resetMessages: (state, action) => {
			state.messages = [];
		},
	},
});

export const {
	getConversations,
	getMessages,
	setConversation,
	createMessage,
	resetMessages,
} = conversationSlice.actions;

export default conversationSlice.reducer;
