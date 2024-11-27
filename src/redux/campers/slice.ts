import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCamperById, getCampers, sendFormData } from "./operations";
import { Camper } from "../../components/App/App.types";

export type InitialState = {
    items: Camper[],
    loading: boolean,
    modalIsOpen: boolean,
    page: number,
    isError: boolean,
    selectedCamper: Camper | null,
    favCampers: Camper[]
}

const initialValue: InitialState = {
    items: [],
    loading: false,
    modalIsOpen: false,
    page: 1,
    isError: false,
    selectedCamper: null,
    favCampers: JSON.parse(localStorage.getItem('favCampers') || "[]")
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
        },
        addFavCamper: (state, action) => {
            state.favCampers.push(action.payload)
            localStorage.setItem('favCampers', JSON.stringify(state.favCampers))
        },
        deleteFavCamper: (state, action) => {
            const updatedFav = state.favCampers.filter(favCamper => favCamper.id !== action.payload.id)
            state.favCampers = updatedFav
            localStorage.setItem('favCampers', JSON.stringify(state.favCampers))
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
            .addCase(getCamperById.pending, handlePending)
            .addCase(getCamperById.fulfilled, (state: InitialState, action: PayloadAction<Camper>) => {
                state.selectedCamper = action.payload
            })
            .addCase(getCamperById.rejected, handleRejected)
            .addCase(sendFormData.fulfilled, (state:InitialState, action) => {
                state.isError = false
            })
            .addCase(sendFormData.rejected, handleRejected)
    }
})

export const {openModal, increasePage, addFavCamper, deleteFavCamper} = campersSlice.actions

export const campersReducer = campersSlice.reducer
