import { apiSlice } from "./apiSlice";
import { STUDENT_COURSES_URL } from "./constants";

export const studentCourseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allCoursesAvailable: builder.mutation({
			query: (keyword = "") => ({
				url: `${STUDENT_COURSES_URL}?keyword=${keyword}`,
				method: "GET",
			}),
		}),
		allStudentCourses: builder.mutation({
			query: (keyword = "") => ({
				url: `${STUDENT_COURSES_URL}/mine?keyword=${keyword}`,
				method: "GET",
			}),
		}),
		newStudentCourse: builder.mutation({
			query: (data) => ({
				url: `${STUDENT_COURSES_URL}/${data}`,
				method: "POST",
				body: data,
			}),
		}),
		studentCourseDetails: builder.mutation({
			query: (data) => ({
				url: `${STUDENT_COURSES_URL}/${data}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useAllCoursesAvailableMutation,
	useAllStudentCoursesMutation,
	useNewStudentCourseMutation,
	useStudentCourseDetailsMutation,
} = studentCourseApiSlice;
