import { createSlice } from "@reduxjs/toolkit";

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
        },
        deleteFromTemplate: (state, action) => {
            state.template = state.template.filter(f => f !== action.payload)
        },
        joinFilters: (state) => {
            state.filter = ""
            state.filter = state.template.join('&')
        }
    },
})

export const { writeToTemplate, deleteFromTemplate, joinFilters } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer