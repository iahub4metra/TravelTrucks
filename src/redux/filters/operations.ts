import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";

export const compareFilters = createAsyncThunk('filters',
    async (arr: String[], thunkAPI) => {
        return arr.join("&")
    }
)