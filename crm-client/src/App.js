import { ToastContainer} from 'react-toastify';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { EntryPage } from './pages/entry/EntryPage';

const App=()=> {
  return (
    <DefaultLayout>
      {/* <EntryPage/> */}
     <Dashboard />
    <ToastContainer />
    </DefaultLayout>
  );
}
export default App;
