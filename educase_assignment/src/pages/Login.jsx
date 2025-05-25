import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const loginButtonRef = useRef(null);
  const navigate = useNavigate();
  const [flash, setFlash] = useState(false);
  const [email, setEmail] = useState('Enter email address');
  const [password, setPassword] = useState('Enter password');

  

  const handleContainerClick = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (email === savedUser?.email && password === savedUser?.password) {
      navigate('/profile');
    } else {
      alert('Invalid email or password');
    }
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
      <form onSubmit={handleLogin}>
        <Container
          sx={{
            display: 'flex',
            marginTop: '30px',
          }}
        >
          <h2>
            Signin to your <br />
            PopX account
          </h2>
        </Container>

        <Container sx={{ display: 'flex', color: 'grey' }}>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </Container>

        <Container>
          <TextField
            id='outlined-required'
            label='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
        </Container>

        <Container>
          <TextField
            id='outlined-required'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              display: 'flex',
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
              marginBottom: '20px',
            }}
          />
        </Container>

        <Container>
          <Button
            type='submit'
            ref={loginButtonRef}
            variant='contained'
            sx={{
              backgroundColor: flash ? 'rgb(8, 126, 255)' : 'rgb(203,203,203)',
              color: 'white',
              textTransform: 'none',
              width: '100%',
              display: 'flex',
            }}
          >
            Login
          </Button>
        </Container>
      </form>
    </Container>
  );
}

export default Login;
