import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList:[]
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
      state.searchTicketList=payload;
      state.tickets = payload
    },
    fetchTicketError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload
    },
    fetchSearchTicket:(state,{payload})=>{
      state.searchTicketList=state.tickets.filter((row)=>{
        if(!payload) return row;
        return row.subject.toLowerCase().includes(payload.toLowerCase())
        })
    },
  },
});

const { reducer, actions } = ticketSlice;

export const { fetchTicketLoading, fetchTicketSuccess, fetchTicketError,fetchSearchTicket } =
  actions;
export default reducer;
