import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Item } from "../assets/Model/Item.ts";

// Initial state
const initialState = {
    items: [] as Item[], // Array of items
    loading: false, // Track loading state
    error: null as string | null, // Track errors
};

// Axios instance
const api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true, // Include credentials (cookies, authorization headers)
});



// Async thunk to fetch all items
export const fetchItems = createAsyncThunk(
    "item/getAllItems",
    async () => {
        console.log("Inside the getItems method");
        try {
            const response = await api.get("/api/v1/item/getAllItems");
            console.log("All items:", response.data);
            return response.data as Item[];
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
);


// Create the slice
const ItemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // Store the fetched items
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Set the error message
            })


    },
});

// Export actions and reducer
export const { addItem } = ItemSlice.actions;
export default ItemSlice.reducer;