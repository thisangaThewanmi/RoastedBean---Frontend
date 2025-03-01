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

// Async thunk to add an item
export const saveItem = createAsyncThunk(
    "item/addItem",
    async (item: Item) => {
        console.log("Inside the saveItem method");
        try {
            const response = await api.post("/api/v1/item/addItem", item);
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
);


// Async thunk to update an item
export const updateItem = createAsyncThunk(
    "item/updateItem",
    async (updatedItem: Item, { rejectWithValue }) => {
        console.log("Updating item:", updatedItem);
        try {
            const response = await api.put(`/api/v1/item/${updatedItem.id}`, updatedItem);
            console.log("Item updated:", response.data);
            return response.data as Item; // Return the updated item
        } catch (err) {
            console.error("Error updating item:", err);
            return rejectWithValue(err.response?.data || "Failed to update item");
        }
    }
);

// Async thunk to delete an item
export const deleteItem = createAsyncThunk(
    "item/deleteItem",
    async (id: string, { rejectWithValue }) => {
        console.log("Deleting item with ID:", id);
        try {
            const response = await api.delete(`/api/v1/item/${id}`);
            console.log("Item deleted:", response.data);
            return id; // Return the deleted item ID
        } catch (err) {
            console.error("Error deleting item:", err);
            return rejectWithValue(err.response?.data || "Failed to delete item");
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

            // Handle Add Item
            .addCase(saveItem.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear any previous errors
                console.log("Save item pending");
            })
            .addCase(saveItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Store the error
                console.log("Save item rejected:", action.payload);
            })
            .addCase(saveItem.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload); // Add the new item
                console.log("Save item fulfilled:", action.payload);
            })


            // Handle Update Item
            .addCase(updateItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                state.loading = false;
                // Update the item in the items array
                state.items = state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(updateItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set the error message
            })


            // Handle Delete Item
            .addCase(deleteItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.loading = false;
                // Remove the deleted item from the items array
                state.items = state.items.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set the error message
            })
    },
});

// Export actions and reducer
export const { addItem } = ItemSlice.actions;
export default ItemSlice.reducer;