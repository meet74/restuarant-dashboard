/* eslint-disable react/prop-types */
import React from 'react';

function ProductCard({
  image,
  dishName,
  price,
  totalDishesAvailable,
  onCardClick,
}) {
  return (
    <div
      onClick={onCardClick}
      className="flex items-center justify-center m-4 rounded-3xl drop-shadow-md cursor-pointer	 flex-col  bg-[#1D1D1D] ">
      <img
        src={image}
        className="p-8  rounded-[50%] w-72 h-72 object-cover overflow-hidden"
      />
      <span className="text-white font-display">{dishName}</span>
      <span className="text-lightGray font-light my-2">${price}</span>
      <span className="text-gray font-thin pb-4">
        {totalDishesAvailable} plates available
      </span>
    </div>
  );
}

export default ProductCard;
