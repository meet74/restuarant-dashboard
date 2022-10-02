/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector } from 'react-redux';
import SideBar from '../../../components/SideBar.js';

const ProfileScreen = () => {
  // const data = useSelector((state) => state.auth);
  // console.log(data);
  return (
    <div className="h-screen flex">
      <SideBar />
      <span>Profile Screen</span>
    </div>
  );
};

export default ProfileScreen;
