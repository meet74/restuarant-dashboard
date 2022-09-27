import React from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import Input from '../../components/Input';

function Header() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-row justify-between  ">
        <Input height="h-12" width="w-[25%]" placeholder="Search" />
        <div className="flex m-8">
          <span className="font-display font-medium m-2">Meet Patel</span>
          <BsFillBellFill style={{ margin: '8px' }} size={20} />
        </div>
      </div>
      <span className="font-extrabold mt-8 text-3xl flex items-center">
        Top Restro is Open
        <GoPrimitiveDot color="green" style={{ margin: '10px' }} />
      </span>
      <span className="mt-4 font-display font-thin">
        {new Date(Date.now()).toUTCString()}
      </span>
    </div>
  );
}

export default Header;
