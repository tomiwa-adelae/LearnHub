import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	lecturerCourses: [],
	newLecturerCourse: null,
	lecturerCourse: null,
};

const lecturerCourseSlice = createSlice({
	name: "lecturer-course",
	initialState,
	reducers: {
		getLecturerCourses: (state, action) => {
			state.lecturerCourses = action.payload;
		},
		createLecturerCourse: (state, action) => {
			state.newLecturerCourse = action.payload;
		},
		getLecturerCourseById: (state, action) => {
			state.lecturerCourse = action.payload;
		},
		resetLecturerCourses: (state, action) => {
			state.lecturerCourses = [];
			state.newLecturerCourse = null;
			state.lecturerCourse = null;
		},
	},
});

export const {
	getLecturerCourses,
	createLecturerCourse,
	getLecturerCourseById,
	resetLecturerCourses,
} = lecturerCourseSlice.actions;

export default lecturerCourseSlice.reducer;
