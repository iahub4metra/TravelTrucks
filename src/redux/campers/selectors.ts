import { RootState } from "../store";

export const campersSelector = (state: RootState) => state.campers.items

export const pageSelector = (state: RootState) => state.campers.page