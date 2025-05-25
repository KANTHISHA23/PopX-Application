import {
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const signinButtonRef = useRef(null);
  const [flash, setFlash] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState('');
  const navigate = useNavigate();

  const handleContainerClick = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 200);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const user = {
      fullName,
      email,
      password,
    };
    console.log('Saving user:', user);

    localStorage.setItem('user', JSON.stringify(user));
    if (
      fullName.trim() &&
      phone.trim() &&
      email.trim() &&
      password.trim() &&
      isAgency.trim()
    ) {
      navigate('/profile');
    } else {
      alert('Please fill in all required fields.');
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
        position: 'relative',
      }}
    >
      <form onSubmit={handleCreateAccount}>
        <Container
          sx={{
            display: 'flex',
            marginTop: '30px',
          }}
        >
          <h2>
            Create your <br />
            PopX account
          </h2>
        </Container>

        <Container>
          <TextField
            required
            id='outlined-required'
            label='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter Full Name'
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': { color: 'red' },
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
          <TextField
            required
            id='outlined-required'
            label='Phone number'
            placeholder='Enter Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': { color: 'red' },
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
          <TextField
            required
            id='outlined-required'
            label='Email address'
            placeholder='Enter Email Address'
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': { color: 'red' },
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
          <TextField
            required
            id='outlined-required'
            label='Password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': { color: 'red' },
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
          <TextField
            id='outlined-required'
            label='Company name'
            placeholder='Enter Company Name'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            sx={{
              display: 'flex',
              marginTop: '20px',
              marginBottom: '20px',
              '& .MuiFormLabel-asterisk': { color: 'red' },
              '& label': { color: 'rgb(108, 37, 255)' },
              '& .MuiInputBase-input': { color: 'grey' },
            }}
          />
        </Container>

        <Typography
          rules={{ required: 'This field is required.' }}
          sx={{ display: 'flex', marginLeft: '20px' }}
        >
          Are you an agency? <span style={{ color: 'red' }}>*</span>
        </Typography>
        <RadioGroup
          sx={{ display: 'flex', flexDirection: 'row', marginLeft: '20px' }}
          value={isAgency}
          onChange={(e) => setIsAgency(e.target.value)}
        >
          <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
          <FormControlLabel value='No' control={<Radio />} label='No' />
        </RadioGroup>

        <Container>
          <Button
            type='submit'
            ref={signinButtonRef}
            variant='contained'
            sx={{
              textTransform: 'none',
              position: 'absolute',
              bottom: '10px',
              width: '80%',
              backgroundColor: 'rgb(108, 37, 255)',
              color: flash ? 'rgb(8, 126, 255)' : 'white',
            }}
          >
            Create Account
          </Button>
        </Container>
      </form>
    </Container>
  );
}

export default Signin;
