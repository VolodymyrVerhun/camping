import { createSlice } from "@reduxjs/toolkit";
import { fetchCamp } from "./campOps";
const INITIAL_STATE = {
  camp: [],
};

const campSlice = createSlice({
  name: "camp",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamp.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamp.fulfilled, (state, action) => {
        state.loading = false;
        state.camp = action.payload;
      })
      .addCase(fetchCamp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campReducer = campSlice.reducer;
export const selectCamps = (state) => state.camp.camp;
