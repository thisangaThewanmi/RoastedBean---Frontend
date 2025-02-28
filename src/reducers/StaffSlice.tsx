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


const StaffSlice = createSlice({
    name:'staff',
    initialState:initialState,
    reducers:{
        addStaff: (state, action)=>{
            state.staff.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
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
    },
})
export const {addStaff} = StaffSlice.actions;
export default StaffSlice.reducer;