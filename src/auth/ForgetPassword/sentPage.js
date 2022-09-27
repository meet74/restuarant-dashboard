import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import Switch from '../../components/Switch';
import { loginPath, signupPath } from '../../router/pathNames';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/actions/authActions';

const logo = require('../../assets/images/logo.png');

const SentPage = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [timerState, setTimerState] = useState(false);
  const [time, setTime] = useState(2 + 'm ' + 0 + 's ');

  const authData = useSelector((state) => state.auth);

  useEffect(() => {
    if (authData.status === 200) {
      setError(authData.status);
    } else {
      console.log('Error');
      setError(authData.status);
    }
  }, [authData]);

  useEffect(() => {
    timer();
  }, []);

  const dispatch = useDispatch();

  const timer = () => {
    var countDownDate = 120000;
    var now = 0;
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time

      // Find the distance between now and the count down date
      var distance = countDownDate - now * 1000;

      // Time calculations for minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      now++;

      setTime(minutes + 'm ' + seconds + 's ');
      if (distance < 0) {
        clearInterval(x);
        setTimerState(true);
      }
    }, 1000);
  };

  const resetTimer = () => {
    setTimerState(false);
    timer();
  };

  const submitHandler = () => {
    resetTimer();
    setLoader(false);
    dispatch(forgotPassword(authData.email));
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
            We sent verification email to {authData.email}
          </span>
          <span
            className="font-display font-thin text-lg mt-4
          ">
            Please verify your email
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

          <Button
            titleText={
              timerState
                ? 'Re-send verification email'
                : `Send again after ${time}`
            }
            width="w-[40%]"
            backgroundColor={timerState ? 'bg-primary' : ''}
            textColor={timerState ? 'text-background' : 'text-gray'}
            extraButtonContainer={timerState ? '' : 'border border-gray'}
            onClick={submitHandler}
            loader={loader}
            disabled={timerState ? false : true}
          />
        </div>
      </main>
    </div>
  );
};

export default SentPage;
