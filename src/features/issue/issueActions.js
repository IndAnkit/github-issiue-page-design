import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const getIssue=createAsyncThunk('issue/get',async({page=1}={},{getState,rejectWithValue})=>{
    
    let params=`?page=${page}`
    
    try {
        return await axios.get(BASE_URL+params)
          .then((res) =>{ 
              return res.data})
          .then((res) => {
            if (res.error) {
              throw new Error(res.error);
            }
            return {data:res,page};
          });
      } catch (error) {
        console.log('error', error.message);
        return rejectWithValue(error.message);
      }
})