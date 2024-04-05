import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


export const todoSlice= createSlice({
    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        AddTodo:(state, action)=>{
            state.value.push(action.payload)
            toast.success("Create Successful")

        },
        RemoveTodo:(state, action)=>{
            state.value.splice(action.payload,1)
            toast.error("Deleted")
        },
        EditTodo:(state, action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
            toast.info("Update Success");
        }
    }
})

export const {AddTodo,RemoveTodo,EditTodo}=todoSlice.actions;
export default todoSlice.reducer;
