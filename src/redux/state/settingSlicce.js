import {createSlice} from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name:'settings',
    initialState:{
        shake :"shake_class",
    },
    reducers:{
        ShowShake:(state)=>{
            state.shake="shake_class"
        },
        HideShake:(state)=>{
            state.shake=""
        }
    }
})

export const {ShowLoader,HideLoader} = settingsSlice.actions;
export default settingsSlice.reducer;