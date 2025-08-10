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
    signup: {
      loading: false,
      error: null,
      message: null,
      success: false,
      status: null,
    },
    login: {
      loading: false,
      error: null,
      message: null,
      success: false,
      status: null,
    },
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.signup = { loading: false, error: null, message: null, success: false, status: 400 };
      state.login = { loading: false, error: null, message: null, success: false, status: 400 };
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Signup cases
      .addCase(signupUser.pending, (state) => {
        state.signup.loading = true;
        state.signup.error = null;
        state.signup.message = null;
        state.signup.success = false;
        state.signup.status = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.signup.loading = false;
        //state.user = action.payload.data?.user || action.payload.user || null;
        state.token = action.payload.data?.token || action.payload.token || null;
        state.signup.message = action.payload.message || "Signup successful";
        state.signup.status = action.payload.status || 200;
        state.signup.success = action.payload.success || true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.signup.loading = false;
        // state.signup.error = action.payload?.message || "Signup failed";
        state.signup.message = action.payload.message || "Signup failed";
        state.signup.status = action.payload.status || 200;
        state.signup.success = action.payload.success || true;
        state.signup.error=action.payload.error;

      })

      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
        state.login.message = null;
        state.login.success = false;
        state.login.status = 400;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.user = action.payload.data?.user || null;
        state.token = action.payload.data?.token || null;
        state.login.message = action.payload.message || "Login successful";
        state.login.status = action.payload.status || 200;
        state.login.success = action.payload.success || false;
        localStorage.setItem("token", state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.success = false;
        state.login.message = action.payload.message || "Login failed";
        state.login.status = action.payload.status || 400;
        state.login.error=action.payload.error;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
