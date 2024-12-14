import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";
// Async thunk for admin login
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log(info);
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Helper function to return role from token
const returnRole = (token) => {
  if (token) {
    const decodeToken = jwtDecode(token);
    const expireTime = new Date(decodeToken.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return "";
    } else {
      return decodeToken.role;
    }
  } else {
    return "";
  }
};

export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    token: returnRole(localStorage.getItem("accessToken")) || null,
    role: localStorage.getItem("accessToken"),
  },
  reducers: {
    messageClear(state) {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(admin_login.pending, (state) => {
  //       state.loader = true;
  //     })
  //     .addCase(admin_login.fulfilled, (state, { payload }) => {
  //       state.loader = false;
  //       state.successMessage = payload.message;
  //       state.token = payload.token;
  //       state.role = returnRole(payload.token);
  //     })
  //     .addCase(admin_login.rejected, (state, { payload }) => {
  //       state.loader = false;
  //       state.errorMessage = payload.error;
  //     });
  // },

  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(seller_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(seller_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(seller_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(seller_register.pending, (state) => {
        state.loader = true;
      })
      .addCase(seller_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.role = returnRole(payload.token);
      })
      .addCase(seller_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo;
      });
  },
});

// Exporting actions and reducer
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
