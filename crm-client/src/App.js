import { ToastContainer} from 'react-toastify';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { EntryPage } from './pages/entry/EntryPage';
import { AddTicket } from './pages/new-ticket/AddTicket';
import { TicketList } from './pages/ticket-listing/TicketList';
import { TicketPage } from './pages/ticket/TicketPage';

const App=()=> {
  return (
    <DefaultLayout>
      {/* <EntryPage/> */}
     {/* <Dashboard /> */}
     {/* <AddTicket className='mt-5'/> */}
     {/* <TicketList /> */}
     <TicketPage />
    <ToastContainer />
    </DefaultLayout>
  );
}
export default App;
