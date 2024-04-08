import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pdfs: [],
	allPdfs: [],
};

const pdfSlice = createSlice({
	name: "pdf",
	initialState,
	reducers: {
		getPDFs: (state, action) => {
			state.pdfs = action.payload;
		},
		getAllPdfs: (state, action) => {
			state.allPdfs = action.payload;
		},
	},
});

export const { getPDFs, getAllPdfs } = pdfSlice.actions;

export default pdfSlice.reducer;
