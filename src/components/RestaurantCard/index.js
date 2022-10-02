/* eslint-disable react/prop-types */
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function RestaurantCard({ image, restaurantName = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between m-4 rounded-3xl drop-shadow-lg cursor-pointer h-52 w-[90%] self-center bg-backgroundSecondary border border-secondary">
      <img
        src={image}
        className="p-8  rounded-[50%]  h-60 object-cover overflow-hidden"
      />
      <span className="text-black font-medium text-2xl ">{restaurantName}</span>
      <div className="flex items-center m-12">
        <IoMdArrowDropdown size={'22px'} />
      </div>
    </div>
  );
}

export default RestaurantCard;
