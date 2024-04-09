import { apiSlice } from "./apiSlice";
import { CHATS_USERS_URL, MESSAGES_URL } from "./constants";

export const conversationApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allConversations: builder.mutation({
			query: () => ({
				url: `${CHATS_USERS_URL}`,
				method: "GET",
			}),
		}),
		allMessages: builder.mutation({
			query: (data) => ({
				url: `${MESSAGES_URL}/${data}`,
				method: "GET",
			}),
		}),
		sendMessage: builder.mutation({
			query: (data) => ({
				url: `${MESSAGES_URL}/${data.id}`,
				method: "POST",
				body: data,
			}),
		}),
	}),
});

export const {
	useAllConversationsMutation,
	useAllMessagesMutation,
	useSendMessageMutation,
} = conversationApiSlice;
