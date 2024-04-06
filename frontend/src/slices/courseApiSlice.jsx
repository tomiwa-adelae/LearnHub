import { apiSlice } from "./apiSlice";
import { COURSES_URL } from "./constants";

export const courseApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allCourses: builder.mutation({
			query: (keyword = "") => ({
				url: `${COURSES_URL}?keyword=${keyword}`,
				method: "GET",
			}),
		}),
		newCourse: builder.mutation({
			query: (data) => ({
				url: `${COURSES_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		courseDetails: builder.mutation({
			query: (data) => ({
				url: `${COURSES_URL}/${data}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useAllCoursesMutation,
	useNewCourseMutation,
	useCourseDetailsMutation,
} = courseApiSlice;
