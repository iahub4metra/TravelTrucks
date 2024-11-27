import { RootState } from "../store";

export const campersSelector = (state: RootState) => state.campers.items

export const pageSelector = (state: RootState) => state.campers.page

export const loadingSelector = (state: RootState) => state.campers.loading

export const errorSelector = (state: RootState) => state.campers.isError

export const camperSelector = (state: RootState) => state.campers.selectedCamper

export const selectFavCamers = (state: RootState) => state.campers.favCampers