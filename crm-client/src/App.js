import { ToastContainer } from "react-toastify";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EntryPage } from "./pages/entry/EntryPage";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketList } from "./pages/ticket-listing/TicketList";
import { TicketPage } from "./pages/ticket/TicketPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/add-ticket" element={<AddTicket className="mt-5" />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/ticket/:id" element={<TicketPage />} />
        </Routes>
        <ToastContainer />
      </DefaultLayout>
    </Router>
  );
};
export default App;
