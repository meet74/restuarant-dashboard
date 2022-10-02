/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector } from 'react-redux';
import SideBar from '../../../components/SideBar.js';

const HomeScreen = () => {
  // const data = useSelector((state) => state.auth);

  // const restaurantsData = useSelector((state) => state.restaurant);
  // console.log(data);
  // console.log('restaurant', restaurantsData);

  return (
    <div className="h-screen flex">
      <SideBar />
      <span>Food deilvery App</span>
    </div>
  );
};

export default HomeScreen;
