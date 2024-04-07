import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pdfs: [],
};

const pdfSlice = createSlice({
	name: "pdf",
	initialState,
	reducers: {
		getPDFs: (state, action) => {
			state.pdfs = action.payload;
		},
	},
});

export const { getPDFs } = pdfSlice.actions;

export default pdfSlice.reducer;
