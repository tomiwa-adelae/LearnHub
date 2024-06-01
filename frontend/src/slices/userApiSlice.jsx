import { apiSlice } from "./apiSlice";
import { USERS_URL } from "./constants";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/auth`,
				method: "POST",
				body: data,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		registerLecturer: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/lecturer`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
			}),
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		changeUserImage: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/image`,
				method: "PUT",
				body: data,
			}),
		}),
		updatePassword: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/password`,
				method: "PUT",
				body: data,
			}),
		}),
		resetPassword: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/reset-password`,
				method: "POST",
				body: data,
			}),
		}),
		verifyCode: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/verify-code`,
				method: "POST",
				body: data,
			}),
		}),
		updateNewPassword: builder.mutation({
			query: ({ id, code, newPassword, confirmPassword }) => ({
				url: `${USERS_URL}/update-password/${id}/${code}`,
				method: "POST",
				body: { id, code, newPassword, confirmPassword },
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useRegisterLecturerMutation,
	useLogoutMutation,
	useUpdateUserMutation,
	useUpdatePasswordMutation,
	useResetPasswordMutation,
	useVerifyCodeMutation,
	useUpdateNewPasswordMutation,
	useChangeUserImageMutation,
} = userApiSlice;
