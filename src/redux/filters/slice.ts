import { createSlice } from "@reduxjs/toolkit";
import { compareFilters } from "./operations";

type InitialState = {
    filter: string,
    template: String[]
}

const initialState: InitialState = {
    filter: '',
    template: []
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        writeToTemplate: (state, action) => {
            state.template = [...state.template, action.payload]
        }
    },
    extraReducers: builder => {
        builder
            .addCase(compareFilters.fulfilled, (state: InitialState, action) => {
                state.filter = '';
                state.filter = action.payload
                state.template =[]
            })
    }
})

export const { writeToTemplate } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer