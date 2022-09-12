import { ToastContainer } from "react-toastify";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EntryPage } from "./pages/entry/EntryPage";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketList } from "./pages/ticket-listing/TicketList";
import { TicketPage } from "./pages/ticket/TicketPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
const App = () => {
  return (
    <>
      <Router>
       
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<EntryPage />} />
            <Route
              path="/add-ticket"
              element={
                <PrivateRoute>
                  <AddTicket className="mt-5" />
                </PrivateRoute>
              }
            />
            <Route
              path="/tickets"
              element={
                <PrivateRoute>
                  <TicketList />
                </PrivateRoute>
              }
            />
            <Route
              path="/ticket/:id"
              element={
                <PrivateRoute>
                  <TicketPage />
                </PrivateRoute>
              }
            />
          </Routes>

        <ToastContainer />
      </Router>
    </>
  );
};
export default App;
