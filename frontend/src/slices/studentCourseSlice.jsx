import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	availableCourses: [],
	studentCourses: [],
	newStudentCourse: null,
	studentCourse: null,
};

const studentCourseSlice = createSlice({
	name: "student-course",
	initialState,
	reducers: {
		getCoursesAvailable: (state, action) => {
			state.availableCourses = action.payload;
		},
		getStudentCourses: (state, action) => {
			state.studentCourses = action.payload;
		},
		createStudentCourse: (state, action) => {
			state.newStudentCourse = action.payload;
		},
		getStudentCourseById: (state, action) => {
			state.studentCourse = action.payload;
		},
		resetStudentCourses: (state, action) => {
			state.studentCourses = [];
			state.newStudentCourse = null;
			state.studentCourse = null;
		},
	},
});

export const {
	getCoursesAvailable,
	getStudentCourses,
	createStudentCourse,
	getStudentCourseById,
	resetStudentCourses,
} = studentCourseSlice.actions;

export default studentCourseSlice.reducer;
