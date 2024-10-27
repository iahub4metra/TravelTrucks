import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";
import { Camper } from "../../components/App/App.types";

export type InitialState = {
    items: Camper[],
    loading: boolean,
    modalIsOpen: boolean,
    page: number,
    isError: boolean,
}

const initialValue: InitialState = {
    items: [],
    loading: false,
    modalIsOpen: false,
    page: 1,
    isError: false
}

const handlePending = (state: InitialState) => {
    state.loading = true
    state.isError = false
    state.items =[]
}

const handleRejected = (state: InitialState) => {
    state.loading = false;
    state.isError = true
}

const campersSlice = createSlice({
    name: 'campers',
    initialState: initialValue,
    reducers: {
        openModal: (state, action) => {
            state.modalIsOpen = true
        },
        increasePage: (state) => {
            state.page += 1
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCampers.pending, handlePending)
            .addCase(getCampers.fulfilled, (state: InitialState, action) => {
                state.loading = false
                state.isError = false
                state.items = action.payload
            })
            .addCase(getCampers.rejected, handleRejected)
    }
})

export const {openModal, increasePage} = campersSlice.actions

export const campersReducer = campersSlice.reducer