
import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../reducers/StaffSlice.tsx";
import ItemSlice from "../reducers/ItemSlice.tsx";


// export const store =createStore(customerReducer)
export const store = configureStore({
    reducer: {
        staff:StaffSlice,
        item:ItemSlice
    }
})
export type AppDispatch = typeof store.dispatch;
