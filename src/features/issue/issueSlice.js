import { createSlice } from "@reduxjs/toolkit";
import { getIssue } from "./issueActions";

const issueSlice=createSlice({
    name:"issue",
    initialState:{
        items:[],
        page:0,
        loading:null
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getIssue.rejected,(state, { payload }) => {
            state.loading = false;
            state.accesToken = null;
            state.error = payload;
          }).addCase(getIssue.pending,(state) => {
            state.loading = true;
            state.accesToken = null;
            state.error = null;
          }).addCase(getIssue.fulfilled,(state, { payload }) => {
            state.loading = false;
            state.page=payload.page;
            state.items.push(...payload.data);
            state.error = null;
          })
    },
    // extraReducers:{
    //     [getIssue.rejected]: (state, { payload }) => {
    //         state.loading = false;
    //         state.accesToken = null;
    //         state.error = payload;
    //       },
    //       [getIssue.pending]: (state) => {
    //         state.loading = true;
    //         state.accesToken = null;
    //         state.error = null;
    //       },
    //       [getIssue.fulfilled]: (state, { payload }) => {
    //         state.loading = false;
    //         state.token = payload.token;
    //         state.error = null;
    //       },
    // }
});

export default issueSlice.reducer;

export const issueSelector=state=>state.issue;