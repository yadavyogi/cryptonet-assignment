// src/App.js
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-semibold my-4">User Profile</h1>
      </header>
      <main>
        <UserProfile />
      </main>
    </div>
  );
}

export default App;
