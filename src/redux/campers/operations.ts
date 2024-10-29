import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Camper } from "../../components/App/App.types";

interface MockapiResponse {
    total: number,
    items: Camper[]
    
}


axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'

export const getCampers = createAsyncThunk<Camper[], string >('campers/fetchAll',
    async (filters: string, thunkAPI) =>  {
        try {
            const response = await axios.get<MockapiResponse>(`/campers?${filters}`)
            return response.data.items
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getCamperById = createAsyncThunk<Camper, string>('campers/fetchOne',
    async (id: string, thunkAPI) => {
        try {
            const response = await axios.get<Camper>(`/campers/${id}`)
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }

)

interface FormValues {
    name: string;
    email: string;
    bookingDate: string | undefined;
    comment: string;
}

export const sendFormData = createAsyncThunk('form/post',
    async (formData: FormValues, thunkAPI) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            return response.data
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)