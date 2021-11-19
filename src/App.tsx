import React from 'react';
import Logout from './components/Logout';
import User from './components/User';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Login />
        <br />
        <User />
        <br />
        <Logout />
    </div>
  );
}

export default App;
