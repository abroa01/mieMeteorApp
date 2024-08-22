import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import ApiComponent from './ApiComponent';

const App = () => {
  const [userHandle, setUserHandle] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionCookie, setSessionCookie] = useState('');

  const handleSaveUserHandle = (handle) => {
    setUserHandle(handle);
  };

  const handleLogin = (cookie) => {
    setSessionCookie(cookie);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSessionCookie('');
    setUserHandle('');
  };

  if (!userHandle) {
    return <Home saveUserHandle={handleSaveUserHandle} />;
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} userHandle={userHandle} />;
  }

  return (
    <ApiComponent
      cookie={sessionCookie}
      userHandle={userHandle}
      onLogout={handleLogout}
    />
  );
};

export default App;