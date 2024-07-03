
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Income_expense from './components/Incexp';
import Transaction from './components/Transaction';
import Add_rec from './components/Add_transaction';
import { GlobalProvider } from './context_api/Globalcontext';

function App() {
  return (
    <div className="App"> 

      <GlobalProvider>

      <Header />
      <Balance />
      <Income_expense />
      <Add_rec />
      <Transaction />

      </GlobalProvider>
      
    </div>
  );
}

export default App;
