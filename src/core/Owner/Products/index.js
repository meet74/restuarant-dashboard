/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header/index.js';
import ProductCard from '../../../components/ProductCard/index.js';
import SideBar from '../../../components/SideBar.js';
import { MdRestaurantMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  addProductScreenPath,
  productDetailScreenPath,
} from '../../../router/pathNames.js';
import { dummyData } from '../../../constants/dummyData.js';

const ProductScreen = () => {
  // const data = useSelector((state) => state.auth);
  const productData = useSelector((state) => state.product);

  const usenavigate = useNavigate();
  console.log(productData);
  return (
    <div className="h-screen flex overflow-scroll	">
      <SideBar />
      <div className="relative">
        <Header />

        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="my-4 font-display font-extrabold text-2xl">
              Main Courses
            </span>
            <button
              onClick={() => usenavigate(addProductScreenPath)}
              className="flex items-center justify-center bg-secondary text-white p-4 rounded-lg mr-14 m-2">
              <MdRestaurantMenu className="mr-4" />
              <span className="font-display font-medium text-lg">
                Add Product
              </span>
            </button>
          </div>
          <div className="grid grid-cols-none md:grid-cols-2  xl:grid-cols-4 ">
            {dummyData.map((dish, index) => {
              return (
                <ProductCard
                  onCardClick={() =>
                    usenavigate(productDetailScreenPath, { state: { dish } })
                  }
                  key={index}
                  dishName={dish.name}
                  image={dish.image}
                  price={dish.price}
                  totalDishesAvailable={dish.totalDishesAvailable}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
