import { ToastContainer} from 'react-toastify';
import './App.css';
import { EntryPage } from './pages/entry/EntryPage';

const App=()=> {
  return (
    <>
      <EntryPage/>
    <ToastContainer />
    </>
  );
}
export default App;
