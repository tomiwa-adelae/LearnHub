import { apiSlice } from "./apiSlice";
import { LECTURER_COURSES_URL } from "./constants";

export const lecturerCourseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allLecturerCourses: builder.mutation({
			query: (keyword = "") => ({
				url: `${LECTURER_COURSES_URL}?keyword=${keyword}`,
				method: "GET",
			}),
		}),
		newLecturerCourse: builder.mutation({
			query: (data) => ({
				url: `${LECTURER_COURSES_URL}`,
				method: "POST",
				body: data,
			}),
		}),

		lecturerCourseDetails: builder.mutation({
			query: (data) => ({
				url: `${LECTURER_COURSES_URL}/${data}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useAllLecturerCoursesMutation,
	useNewLecturerCourseMutation,
	useLecturerCourseDetailsMutation,
} = lecturerCourseApiSlice;
