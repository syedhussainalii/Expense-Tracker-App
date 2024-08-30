import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobaProvider } from './components/context/GlobalState';
import SignIn from './GoogleSignIn/SignIn';
import { useState, useEffect } from 'react';
import { auth } from './GoogleSignIn/config';
import { signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('email');
      // Optionally, you can redirect to the home page or refresh
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <GlobaProvider>
      {user ? (
        <>
          <Header />
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </GlobaProvider>
  );
}

export default App;
