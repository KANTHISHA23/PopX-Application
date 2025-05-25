import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignIn from '../pages/Signin';
import Welcome from '../pages/Welcome';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
