import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from './pages/ticket-listing/TicketsSlice.js'
import loginReducer from './pages/login/LoginSlice.js'
const store = configureStore({
  reducer: {
    tickets:ticketReducer,
    login:loginReducer
  },
});


export default store;