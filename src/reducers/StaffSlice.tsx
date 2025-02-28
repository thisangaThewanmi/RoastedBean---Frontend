import axios from "axios";

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Staff} from "../assets/Model/Staff.ts";

const initialState={
    staff:[],
    loading: false, // Optional: Track loading state
    error: null,
}
const api =axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true, // Include credentials (cookies, authorization headers)


})
export const saveStaff=createAsyncThunk(
    'staff/addStaff',
    async (staff:Staff)=>{
        console.log("inside the saveStaff method")
        try {
            const response = await api.post('api/v1/staff/addStaff',staff);
            console.log(response.data);
            return response.data;

        }catch(err){
            console.log(err);
        }
    }
)


export const fetchStaff=createAsyncThunk(
    'staff/getAllStaff',
    async ()=>{
        console.log("inside the get staff method")
        try {
            const response = await api.get('api/v1/staff/getAllStaff');
             console.log("all staff:",response.data)
            return response.data as Staff[];
        }catch(err){
            console.log(err);
        }
    }
)

export const deleteStaff = createAsyncThunk(
    "staff/deleteStaff",
    async (email: string, { rejectWithValue }) => {
        console.log("Deleting staff with ID:", email);
        try {
            const response = await api.delete(`/api/v1/staff/${email}`);
            console.log("Staff deleted:", response.data);
            return email; // Return the deleted staff ID
        } catch (err) {
            console.error("Error deleting staff:", err);
            return rejectWithValue(err.response?.data || "Failed to delete staff");
        }
    }
);


export const updateStaff = createAsyncThunk(
    "staff/updateStaff",
    async (updatedStaff: Staff, { rejectWithValue }) => {
        console.log("Updating staff:", updatedStaff);
        try {
            const response = await api.put(`/api/v1/staff/${updatedStaff.email}`, updatedStaff);
            console.log("Staff updated:", response.data);
            return response.data as Staff; // Return the updated staff member
        } catch (err) {
            console.error("Error updating staff:", err);
            return rejectWithValue(err.response?.data || "Failed to update staff");
        }
    }
);

const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers: {
        addStaff: (state, action) => {
            state.staff.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder

            //Handle Add
            .addCase(saveStaff.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear any previous errors
                console.log("Save staff pending");
            })
            .addCase(saveStaff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store the error
                console.log("Save staff rejected:", action.payload);
            })
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.loading = false;
                state.staff.push(action.payload); // Add the new staff member
                console.log("Save staff fulfilled:", action.payload);
            })

            //Handle Fetch
            .addCase(fetchStaff.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStaff.fulfilled, (state, action) => {
                state.loading = false;
                state.staff = action.payload; // Store the fetched array in staffMembers
            })
            .addCase(fetchStaff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Set the error message
            })


            //handle Delete
            .addCase(deleteStaff.pending, (state) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(deleteStaff.fulfilled, (state, action) => {
                state.loading = false;
                // Remove the deleted staff member from the staff array
                state.staff = state.staff.filter((staff) => staff.email !== action.payload);
            })
            .addCase(deleteStaff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set the error message
            })

            // Handle updateStaff
            .addCase(updateStaff.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateStaff.fulfilled, (state, action) => {
                state.loading = false;
                // Update the staff member in the staff array
                state.staff = state.staff.map((staff) =>
                    staff.email === action.payload.email ? action.payload : staff
                );
            })
            .addCase(updateStaff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; // Set the error message
            });
    },

})
export const {addStaff} = StaffSlice.actions;
export default StaffSlice.reducer;