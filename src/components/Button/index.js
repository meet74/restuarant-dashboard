/* eslint-disable react/prop-types */
import React from 'react';
import { Rings } from 'react-loader-spinner';

function Button({
  disabled = false,
  backgroundColor = 'bg-primary',
  textColor = 'text-background',
  fontStyle = 'font-display',
  fontSize = 'text-lg',
  height = 'h-16',
  width = 'w-[75%]',
  extraButtonContainer = '',
  extraButtonTextStyle = '',
  titleText = '',
  onClick,
  loader = false,
  loaderColor = '#ffffff',
  loaderWidth = '40',
  loaderHeight = '40',
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${backgroundColor} ${height} ${width} mt-4 rounded-lg items-center justify-center flex ${extraButtonContainer} ${textColor} ${fontStyle} ${fontSize} ${extraButtonTextStyle}`}>
      {loader ? (
        <Rings
          height={loaderHeight}
          width={loaderWidth}
          color={loaderColor}
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        titleText
      )}
    </button>
  );
}

export default Button;
