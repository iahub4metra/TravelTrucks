import { RootState } from "../store";


export const filterSelector = (state: RootState) => state.filters.filter

export const filterTemplateSelector = (state: RootState) => state.filters.template