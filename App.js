import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import  Transaction  from './components/Transaction';
import { GlobaProvider } from './components/context/GlobalState';


function App() {
  return (
    <GlobaProvider>
      <Header />
      <div className="container">
        <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobaProvider>
  );
}

export default App;
