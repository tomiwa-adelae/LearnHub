import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
import lecturerCourseReducer from "./slices/lecturerCourseSlice";
import studentCourseReducer from "./slices/studentCourseSlice";
import pdfReducer from "./slices/pdfSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		lecturerCourse: lecturerCourseReducer,
		studentCourse: studentCourseReducer,
		pdf: pdfReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

export default store;
