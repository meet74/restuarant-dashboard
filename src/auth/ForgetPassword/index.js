import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Switch from '../../components/Switch';
import {
  forgotPasswordEmailSentPath,
  loginPath,
  signupPath,
} from '../../router/pathNames';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const logo = require('../../assets/images/logo.png');

const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const authData = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authData.status === 200 && authData.email) {
      navigate(forgotPasswordEmailSentPath);
      setError(authData.status);
    } else {
      console.log('Error');
      setError(authData.status);
    }
  }, [authData]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    setLoader(true);
    //navigate(forgotPasswordEmailSentPath);
    dispatch(forgotPassword(email));
    setLoader(false);
    console.log('status', authData.status);
  };

  return (
    <div className="flex flex-1 flex-col h-screen ">
      <header className="flex  flex-row justify-between items-center flex-wrap">
        <img src={logo} alt="logo" className="h-44 w-44 object-contain " />
        <Switch
          firstText="Login"
          firstNavigationPath={loginPath}
          secondText="SignUp"
          secondNavigationPath={signupPath}
        />
      </header>
      <main>
        <div className="flex flex-col items-center   justify-center self-center">
          <span className="font-display font-light text-4xl">
            Forgot Password
          </span>
          <span
            className="font-display font-thin text-lg mt-4
          ">
            We will send email for verification to this email
          </span>
          <span
            className="font-display font-light text-lg mt-4 text-red
          ">
            {error === 500
              ? 'something went wrong!!'
              : error === 400
              ? 'Email is wrong'
              : error === 404
              ? "Email does'nt exist"
              : ''}
          </span>
          <Input
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
            } `}
          />

          <Button
            titleText="Send verification email"
            width="w-[40%]"
            onClick={submitHandler}
            loader={loader}
          />
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
