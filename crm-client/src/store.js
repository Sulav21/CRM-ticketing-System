import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from './pages/ticket-listing/TicketsSlice.js'
import loginReducer from './pages/login/LoginSlice.js'
import userReducer from './pages/dashboard/userSlice'
const store = configureStore({
  reducer: {
    tickets:ticketReducer,
    login:loginReducer,
    user:userReducer,
  },
});


export default store;