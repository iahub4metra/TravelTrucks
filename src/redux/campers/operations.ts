import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Camper } from "../../components/App/App.types";

interface MockapiResponse {
    total: number,
    items: Camper[]
    
}


axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'

export const getCampers = createAsyncThunk<Camper[], string>('campers/fetchAll',
    async (filters: string, thunkAPI) =>  {
        try {
            const response = await axios.get<MockapiResponse>(`/campers?${filters}`)
            return response.data.items
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


