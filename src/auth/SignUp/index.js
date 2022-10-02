import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginPath, signupPath } from '../../router/pathNames';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/actions/authActions';
import Switch from '../../components/Switch';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { setProfileData } from '../../store/actions/profileActions';

const logo = require('../../assets/images/logo.png');
const mainImage = require('../../assets/images/bg-restaurant-5.png');

const SignUpScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const data = useSelector((state) => state.auth);
  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    if (data.status === 200 && !data.token) {
      dispatch(setProfileData(data.id));
    } else {
      console.log('Error');
      setError(data.status);
    }
  }, [data]);

  useEffect(() => {
    if (profileData.status === 200 && profileData.id && !data.token) {
      navigate(loginPath, { replace: true });
    } else {
      console.log('profile Error');
      setError(data.status);
    }
  }, [profileData]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    setLoader(true);
    dispatch(signupUser(email, password));
    setLoader(false);
  };

  return (
    <div className="flex flex-1 flex-col h-screen ">
      <header className="flex  flex-row justify-between items-center flex-wrap">
        <img
          src={logo}
          alt="logo"
          className="h-44 w-44 object-contain flex items-center"
        />
        <Switch
          firstNavigationPath={loginPath}
          secondNavigationPath={signupPath}
          currentpath="SignUp"
          firstText="Login"
          secondText="SignUp"
          firstTextColor="text-gray"
          secondTextColor="text-background"
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
            <span className="font-display font-light text-4xl">Welcome :)</span>
            <span
              className="font-display font-thin text-lg mt-4
            ">
              To Keep connected with us please signUp with your personal
              information
            </span>

            <span
              className="font-display font-light text-lg mt-4 text-red
          ">
              {error === 500
                ? 'something went wrong!!'
                : error === 400
                ? 'Please enter email and password again'
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
            <Link to={loginPath}>
              <span className="m-2">Already have an account ?</span>
            </Link>
            <Button
              titleText="SignUp"
              loader={loader}
              onClick={submitHandler}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;
