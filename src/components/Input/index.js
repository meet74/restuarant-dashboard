/* eslint-disable react/prop-types */
import React from 'react';

function Input({
  onChange,
  placeholder,
  className,
  width = 'w-[40%]',
  type = 'text',
  height = '',
  value,
  required = false,
  name = '',
}) {
  return (
    <input
      name={name}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`font-display border rounded-md block  my-6 mt-8 p-4 text-lg ${className} ${width} ${height}`}
    />
  );
}

export default Input;
