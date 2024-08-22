import React, { useState } from 'react';

const Home = ({ saveUserHandle }) => {
  const [userHandle, setUserHandle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserHandle(userHandle);
  };

  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userHandle}
          onChange={(e) => setUserHandle(e.target.value)}
          placeholder="Enter User Handle"
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Home;