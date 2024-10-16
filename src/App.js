import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme === 'light' ? 'light-theme' : '';

    // Check if user is already logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }

    // Remove event listener on component unmount (no need for 'beforeunload' anymore)
    return () => {};
  }, []);

  const handleLogin = (username) => {
    setUser(username);  // Update user state
    localStorage.setItem('user', username);  // Save to localStorage
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.className = newTheme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="app">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      
      {user ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
