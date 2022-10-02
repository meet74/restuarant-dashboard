/* eslint-disable react/prop-types */
import React from 'react';

function IconButton({
  backgroundColor = 'bg-primary',
  textColor = 'text-white',
  height = '',
  width = '',
  extraButtonContainer = '',
  extraButtonTextStyle = '',
  titleText = '',
  onClick,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className={`${height} ${width} ${extraButtonContainer} flex items-center justify-center p-4 rounded-lg mr-14 m-2 ${backgroundColor} ${textColor}`}>
      {icon}
      <span
        className={`font-display font-medium text-lg ml-4 ${extraButtonTextStyle}`}>
        {titleText}
      </span>
    </button>
  );
}

export default IconButton;
