/* eslint-disable react/prop-types */
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';

function DropDown({ options, onChange, value }) {
  return (
    <Dropdown
      controlClassName="dropdown-menu"
      arrowClassName="dropdown-arrow"
      menuClassName="dropdown-menu-class"
      options={options}
      onChange={onChange}
      value={value}
      placeholder="Select an option"
    />
  );
}

export default DropDown;
