import React, { useState } from 'react';
import { MieApi } from 'meteor/abroa01:mieapi-meteor';

const { Home, Login, ApiComponent } = MieApi;

export const MainComponent = () => {
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