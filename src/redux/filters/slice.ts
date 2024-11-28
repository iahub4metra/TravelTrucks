import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    filter: string,
    template: String[],
    isOpen: boolean
}

const initialState: InitialState = {
    filter: '',
    template: [],
    isOpen: false
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        writeToTemplate: (state, action) => {
            state.template = [...state.template, action.payload]
        },
        deleteFromTemplate: (state, action) => {
            state.filter =""
            state.template = state.template.filter(f => f !== action.payload)
        },
        joinFilters: (state) => {
            state.filter = ""
            state.filter = state.template.join('&')
        },
        openSidebar: (state) => {
            state.isOpen = !state.isOpen
        }
    },
})

export const { writeToTemplate, deleteFromTemplate, joinFilters, openSidebar } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer