import { configureStore } from "@reduxjs/toolkit";
import { printNumSlice } from "./SliceRedux";


export const store=configureStore({
    reducer:{
        print:printNumSlice
    }})