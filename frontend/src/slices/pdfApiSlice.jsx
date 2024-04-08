import { apiSlice } from "./apiSlice";
import { PDF_URL } from "./constants";

export const pdfApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allPDFsById: builder.mutation({
			query: (data) => ({
				url: `${PDF_URL}/${data}`,
				method: "GET",
			}),
		}),
		allPDFs: builder.mutation({
			query: (keyword = "") => ({
				url: `${PDF_URL}?keyword=${keyword}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useAllPDFsByIdMutation, useAllPDFsMutation } = pdfApiSlice;
