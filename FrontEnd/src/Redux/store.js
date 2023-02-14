import { configureStore } from "@reduxjs/toolkit"
import doctorSlice from "./DoctorRedux";


export const store = configureStore({
    reducer: {
        doctorInfo:doctorSlice.reducer,
    }
})