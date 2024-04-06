import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	courses: [],
	newCourse: null,
	course: null,
};

const courseSlice = createSlice({
	name: "course",
	initialState,
	reducers: {
		getCourses: (state, action) => {
			state.courses = action.payload;
		},
		createCourse: (state, action) => {
			state.newCourse = action.payload;
		},
		getCourseById: (state, action) => {
			state.course = action.payload;
		},
	},
});

export const { getCourses, createCourse, getCourseById } = courseSlice.actions;

export default courseSlice.reducer;
