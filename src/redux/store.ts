import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";



const rootReducer = combineReducers({
    campers: campersReducer,
    filters: filtersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({ reducer: rootReducer })


export type AppDispatch = typeof store.dispatch