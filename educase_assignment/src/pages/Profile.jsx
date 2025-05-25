import { Container, Avatar, Box } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import avatar from '../assets/avatar.avif';
import { AddAPhoto } from '@mui/icons-material';

function Profile() {
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState(null); // store uploaded image
  const [userName, setUserName] = useState('Marry Doe');
  const [userEmail, setUserEmail] = useState('Marry@gmail.com');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user.fullName?.trim() !== '' ? user.fullName : 'No Name');
      setUserEmail(user.email?.trim() !== '' ? user.email : 'No Email');
    }
  }, []);

  const handleIconClick = () => {
    fileInputRef.current.click(); // trigger file input
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setAvatarSrc(imageURL); // preview uploaded image
    }
  };

  return (
    <Container
      disableGutters
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
      <Container sx={{ backgroundColor: 'white', color: 'grey' }}>
        <p>Account Settings</p>
      </Container>

      <Container sx={{ display: 'flex' }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            alt='Profile Photo'
            src={avatarSrc || avatar}
            sx={{
              display: 'flex',
              marginTop: '20px',
              width: '110px',
              height: '110px',
            }}
          />
          <AddAPhoto
            onClick={handleIconClick}
            sx={{
              position: 'absolute',
              bottom: '7%',
              right: '3%',
              fontSize: 24,
              color: 'rgb(0,125,255)',
              cursor: 'pointer',
            }}
          />
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </Box>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <b>{userName}</b>
          <p>{userEmail}</p>
        </Container>
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Container>

      <Container
        sx={{ borderBottom: '2px dotted black', width: '100%', my: 2 }}
      />
    </Container>
  );
}

export default Profile;
