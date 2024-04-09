import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import lecturerCourseReducer from "./slices/lecturerCourseSlice";
import studentCourseReducer from "./slices/studentCourseSlice";
import pdfReducer from "./slices/pdfSlice";
import conversationReducer from "./slices/conversationSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		lecturerCourse: lecturerCourseReducer,
		studentCourse: studentCourseReducer,
		pdf: pdfReducer,
		conversation: conversationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

export default store;
