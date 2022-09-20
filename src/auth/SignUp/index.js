import React from 'react';
import { Link } from 'react-router-dom';
import { homeScreenPath, loginPath, signupPath } from '../../router/pathNames';

const logo = require('../../assets/images/logo.png');
const mainImage = require('../../assets/images/bg-restaurant-5.png');

const SignUpScreen = () => {
  return (
    <div className="flex flex-1 flex-col h-screen ">
      <header className="flex  flex-row justify-between items-center">
        <img src={logo} alt="logo" className="h-44 w-44 object-contain " />
        <div className=" flex flex-row m-10 mx-24  border-lightGray border rounded-xl">
          <Link to={loginPath}>
            <h4 className=" p-2 h-14 w-28 items-center justify-center flex-1 flex text-gray font-display rounded-xl">
              Login
            </h4>
          </Link>
          <Link to={signupPath}>
            <h4 className="bg-primary p-2 h-14 w-28 items-center justify-center flex-1 flex text-white font-display rounded-xl">
              SignUp
            </h4>
          </Link>
        </div>
      </header>
      <main>
        <div className="flex   justify-around">
          <div
            className=" flex grow-[2]  justify-center
            ">
            <img
              src={mainImage}
              alt="logo"
              className="h-[30rem] w-[40rem] object-contain "
            />
          </div>
          <div className="flex flex-col  grow justify-center">
            <span className="font-display font-light text-4xl">Welcome :)</span>
            <span
              className="font-display font-thin text-lg mt-4
            ">
              To Keep connected with us please signUp with your personal
              information
            </span>

            <input
              placeholder="email"
              className="font-display border rounded-md border-lightGray  block w-[75%] my-6 mt-8 p-4 text-lg"
            />

            <input
              placeholder="password"
              type={'password'}
              className="font-display border rounded-md border-lightGray block  w-[75%]  p-4 text-lg"
            />
            <span className="m-2">Already have an account ?</span>

            <Link to={homeScreenPath}>
              <div className="bg-primary h-16 w-[75%] mt-12 rounded-lg items-center justify-center flex">
                <button className="text-background font-display text-lg">
                  SignUp
                </button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;
