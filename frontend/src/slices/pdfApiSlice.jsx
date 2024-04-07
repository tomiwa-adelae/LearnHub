import { apiSlice } from "./apiSlice";
import { PDF_URL } from "./constants";

export const pdfApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		allPDFs: builder.mutation({
			query: (data) => ({
				url: `${PDF_URL}/${data}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useAllPDFsMutation } = pdfApiSlice;
