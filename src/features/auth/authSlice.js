import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}users/signup`, formData);
      return response.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Signup failed" });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}users/login`, formData);
      return response.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Login failed" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers:{
    logout:(state)=>{
      state.user = null;
      state.token = null;
      state.successMessage = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(signupUser.pending,(state)=>{
        state.loading=true,
        state.error=null,
        state.successMessage=null
    })
    .addCase(signupUser.fulfilled,(state,action)=>{
        debugger;
        state.loading=false,
        state.user=action.payload.data.user;
        state.token=action.payload.data.token,
        state.successMessage=action.payload.data.message;
        // localStorage.setItem("token",action.payload.data.token);
    })
    .addCase(signupUser.rejected,(state,action)=>{
        state.loading=false,
        state.error = action.payload.data?.message || "Something went wrong.";
    })
    .addCase(loginUser.pending,(state)=>{
        state.loading=true,
        state.error=null,
        state.successMessage=null
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
        debugger;
        state.loading=false,
        state.user=action.payload.data.user;
        state.token=action.payload.data.token,
        state.successMessage=action.payload.data.message;
        localStorage.setItem("token",action.payload.data.token);
    })
    .addCase(loginUser.rejected,(state,action)=>{
        state.loading=false,
        state.error = action.payload.data?.message || "Something went wrong.";
    })
  }
});


export const {logout}= authSlice.actions;
export default authSlice.reducer;
