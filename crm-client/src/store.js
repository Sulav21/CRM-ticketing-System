import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from './pages/ticket-listing/TicketsSlice.js'
const store = configureStore({
  reducer: {
    tickets:ticketReducer
  },
});


export default store;