/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../components/Button/index.js';
import Header from '../../../../components/Header/index.js';
import Input from '../../../../components/Input/index.js';
import SideBar from '../../../../components/SideBar.js';

const AddProductScreen = () => {
  const [nameOfProduct, setNameOfProduct] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [totalDishes, setTotalDishes] = useState('');

  const handleChange = (e) => {
    setNameOfProduct(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    console.log(image);
  };

  const handleEmailChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setTotalDishes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const data = useSelector((state) => state.auth);

  console.log(data);
  return (
    <div className="h-screen flex overflow-scroll 	">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <div>
          <Header />
        </div>
        <div className="flex flex-col ">
          <span className="my-4 font-display font-extrabold text-2xl">
            Add Product
          </span>
          <div className="flex flex-1 flex-col justify-center mt-8">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}>
              <label className="font-display font-medium ">
                Name of Product :
              </label>
              <br />
              <Input
                placeholder="Name"
                type="text"
                value={nameOfProduct}
                required={true}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <br />

              <label className="font-display font-medium">Image:</label>
              <br />
              <Input
                type="file"
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
              <br />

              <label className="font-display font-medium">Price:</label>
              <br />
              <Input
                placeholder="Price"
                type="text"
                value={price}
                required={true}
                onChange={(e) => {
                  handleEmailChange(e);
                }}
              />
              <br />

              <label className="font-display font-medium">Total Dishes:</label>
              <br />
              <Input
                placeholder="Total Dishes"
                type="number"
                value={totalDishes}
                required={true}
                onChange={(e) => {
                  handlePasswordChange(e);
                }}
              />
              <br />

              <br />

              <Button titleText="Submit" backgroundColor="bg-secondary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductScreen;
