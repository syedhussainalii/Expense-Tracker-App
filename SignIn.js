import React, { useState, useEffect } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import './SignIn.css';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle Google Sign-In
  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setUser(data.user);
      localStorage.setItem('email', data.user.email);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="signin-container">
      <h1 className="signin-heading">Expense-Tracker-App</h1>
      {!user ? (
        <button className="signin-button" onClick={handleClick}>Sign In with Google</button>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default SignIn;
