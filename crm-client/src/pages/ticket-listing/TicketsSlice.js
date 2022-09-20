import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
};

const ticketSlice = createSlice({
  name: "ticketLists",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.tickets = payload
    },
    fetchTicketError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload
    },
  },
});

const { reducer, actions } = ticketSlice;

export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketError } =
  actions;
export default reducer;
