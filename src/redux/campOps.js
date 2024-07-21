import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCamp } from "../services/api";

export const fetchCamp = createAsyncThunk(
  "camp/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getCamp();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
