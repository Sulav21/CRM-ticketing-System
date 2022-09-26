import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{},
  isLoading: false,
  error: "",
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;

      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { getUserPending, getUserSuccess, getUserFail } = actions;
export default reducer;
