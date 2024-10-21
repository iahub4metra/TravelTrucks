import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";
import { Camper } from "../../components/App/App.types";

export type InitialState = {
    items: Camper[],
    loading: boolean,
    modalIsOpen: boolean
}

const initialValue: InitialState = {
    items: [],
    loading: false,
    modalIsOpen: false
}

const handlePending = (state: InitialState) => {
    state.loading = true
}

const handleRejected = (state: InitialState) => {
    state.loading = false
}

const campersSlice = createSlice({
    name: 'campers',
    initialState: initialValue,
    reducers: {
        openModal: (state, action) => {
            state.modalIsOpen = true
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCampers.pending, handlePending)
            .addCase(getCampers.fulfilled, (state: InitialState, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(getCampers.rejected, handleRejected)
    }
})

export const campersReducer = campersSlice.reducer