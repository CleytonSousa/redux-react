import React from 'react';
import Logout from './components/Logout';
import User from './components/User';
import Login from './components/Login';
import { Container } from './style';

function App() {
  return (
    <Container>
      <Login />
        <br />
        <User />
        <br />
        <Logout />
    </Container>
  );
}

export default App;
