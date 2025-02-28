
import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../reducers/StaffSlice.tsx";


// export const store =createStore(customerReducer)
export const store = configureStore({
    reducer: {
        staff:StaffSlice
    }
})
export type AppDispatch = typeof store.dispatch;
