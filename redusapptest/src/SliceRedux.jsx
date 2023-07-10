import { createSlice } from "@reduxjs/toolkit"



const initialState={num:1}
export const printNumSlice=createSlice({

    name:'first',
    initialState,
    reducers:{
        printnum:(state)=>{
            state.num*=2
        }
    }
})
export const {printnum}=printNumSlice.actions
export default printNumSlice.reducer