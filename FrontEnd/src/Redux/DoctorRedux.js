import { createSlice} from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
    name:"doctorDetails",
    initialState:{value:{}},
    reducers:{
            doctorLogin:(state, action)=>{
            state.value= action.payload;
        }
    }
});
export const {doctorLogin} = doctorSlice.actions;
export default doctorSlice.reducer;
