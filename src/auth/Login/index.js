import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  forgotPasswordPath,
  homeScreenPath,
  loginPath,
  signupPath,
} from '../../router/pathNames';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import Switch from '../../components/Switch';
import Input from '../../components/Input';
import Button from '../../components/Button';

const logo = require('../../assets/images/logo.png');
const mainImage = require('../../assets/images/bg-restaurant-1.jpg');

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const data = useSelector((state) => state.auth);
  console.log('seltect', data);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.status === 200 && data.id) {
      navigate(homeScreenPath, { replace: true });
    } else {
      console.log('Error');
      setError(data.status);
    }
  }, [data]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    setLoader(true);
    dispatch(loginUser(email, password));
    setLoader(false);
    console.log('status', data.status);
  };
  console.log(error);
  return (
    <div className="flex flex-1 flex-col h-screen ">
      <header className="flex  flex-row justify-between items-center flex-wrap">
        <img src={logo} alt="logo" className="h-44 w-44 object-contain " />
        <Switch
          firstNavigationPath={loginPath}
          secondNavigationPath={signupPath}
          currentpath={'Login'}
          firstText="Login"
          secondText="SignUp"
          firstTextColor="text-background"
          secondTextColor="text-gray"
          bgColor="bg-primary"
        />
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
            <span className="font-display font-light text-4xl">
              Welcome back :)
            </span>
            <span
              className="font-display font-thin text-lg mt-4
          ">
              To Keep connected with us please login with your personal
              information
            </span>
            <span
              className="font-display font-light text-lg mt-4 text-red
          ">
              {error === 500
                ? 'something went wrong!!'
                : error === 400
                ? 'Email or Password is wrong'
                : error === 404
                ? "Email does'nt exist"
                : ''}
            </span>
            <Input
              width="w-[75%]"
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              placeholder="email"
              className={`${
                error === 404
                  ? 'border-red'
                  : error === 400
                  ? 'border-red'
                  : 'border-lightGray'
              }`}
            />

            <Input
              width="w-[75%]"
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
              }}
              placeholder="password"
              type={'password'}
              className={` ${
                error === 400 ? 'border-red' : 'border-lightGray'
              } `}
            />
            <Link to={forgotPasswordPath}>
              <span className="m-2">Forgot Password ?</span>
            </Link>
            <Button titleText="Login" loader={loader} onClick={submitHandler} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;
