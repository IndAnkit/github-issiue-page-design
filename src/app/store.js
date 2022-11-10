import { configureStore } from "@reduxjs/toolkit";
import issueSlice from "../features/issue/issueSlice";

export const store=configureStore({
    reducer:{
        issue:issueSlice
    }
})