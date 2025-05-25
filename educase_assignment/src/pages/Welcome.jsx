import React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

function Welcome() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [flash, setFlash] = useState(false);
  const loginButtonRef = useRef(null);

  const handleContainerClick = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200); 
  };

  const handleCreateAccount = () => {
    console.log('Create Account button clicked');
    navigate('/signin');
  };

  const handleLogin = () => {
    console.log('Already Registered? Login button clicked');
    setShowLogin(true);
    navigate('/login');
  };

  return (
    <Container
      onClick={handleContainerClick}
      sx={{
        height: '97vh',
        width: '25vw',
        minWidth: '400px',
        backgroundColor: 'rgb(247,248,249)',
        border: 0.1,
        borderColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container sx={{ height: '63%' }}></Container>
      <Container
        sx={{
          display: 'flex',
          margin: '0px',
          padding: '0px',
        }}
      >
        <h2>Welcome to PopX</h2>
      </Container>

      <Container sx={{ color: 'rgb(144 146 148)' }}>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </Container>

      <Container>
        <Button
          variant='contained'
          onClick={handleCreateAccount}
          sx={{
            backgroundColor: 'rgb(108, 37, 255)',
            color: 'white',
            textTransform: 'none',
            width: '100%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          Create Account
        </Button>
      </Container>

      <Container>
        <Button
          ref={loginButtonRef}
          variant='contained'
          onClick={handleLogin}
          sx={{
            backgroundColor: flash ? 'rgb(8,126,255)' : 'rgb(206, 186, 251)',
            color: 'black',
            textTransform: 'none',
            width: '100%',
            marginTop: '5px',
            marginBottom: '5px',
          }}
        >
          Already Registered? Login
        </Button>
      </Container>
    </Container>
  );
}

export default Welcome;
