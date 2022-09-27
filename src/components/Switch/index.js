/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Switch({
  firstNavigationPath = '',
  secondNavigationPath = '',
  firstText = '',
  firstTextColor = '#000000',
  secondText = '',
  secondTextColor = '#000000',
  currentpath = '',
  bgColor = 'bg-primary',
  extraFirstContainerStyle = '',
  extraSecondContainerStyle = '',
}) {
  return (
    <div className=" flex flex-row m-10 mx-24  border-lightGray border rounded-xl">
      <Link to={firstNavigationPath} replace>
        <h4
          className={`${
            currentpath === firstText ? bgColor : ''
          } ${firstTextColor} p-2 h-14 w-28 items-center justify-center flex-1 flex  font-display rounded-xl ${extraFirstContainerStyle}`}>
          {firstText}
        </h4>
      </Link>
      <Link to={secondNavigationPath} replace>
        <h4
          className={`${
            currentpath === secondText ? bgColor : ''
          } ${secondTextColor} p-2 h-14 w-28 items-center justify-center flex-1 flex  font-display rounded-xl ${extraSecondContainerStyle}`}>
          {secondText}
        </h4>
      </Link>
    </div>
  );
}

export default Switch;
