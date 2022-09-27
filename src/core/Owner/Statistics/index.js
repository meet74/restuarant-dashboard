/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../../../components/SideBar.js';

const StatisticScreen = () => {
  const data = useSelector((state) => state.auth);
  console.log(data);
  return (
    <div className="h-screen flex">
      <SideBar />
      <span>Statistic Screen</span>
    </div>
  );
};

export default StatisticScreen;
