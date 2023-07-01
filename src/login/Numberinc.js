import React, { useEffect, useState } from 'react';
import {BsGlobe2} from 'react-icons/bs'
import {FaHandshake, FaGlobeAsia} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'

function NumberInc() {
  const [numinc1, setNuminc1] = useState(0);
  const [numinc2, setNuminc2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the values until the target values are reached
      if (numinc1 < 200) {
        setNuminc1((prevValue) => prevValue + 1);
      }
      if (numinc2 < 1000) {
        setNuminc2((prevValue) => prevValue + 5);
      }
    }, 10); // Increase the values every 10 milliseconds (adjust the interval as needed)

    // Cleanup the interval when the component unmounts or when the target values are reached
    return () => {
      clearInterval(interval);
    };
  }, [numinc1, numinc2]);

  return (
    <div>
      <div className="flex justify-left mt-12">
        <div className="grid grid-cols-3 lg:gap-1 sm:gap-2">
          <div className="rounded-lg bg-purple-400">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-align-center text-white lg:text-xl sm:sm lg:px-16" id="numinc1">
                  {numinc1}+
                </p>
                <FaGlobeAsia size={32} fill='blue' className='lg:mx-16 lg:mt-2'/>
                <div className="font-bold lg:text-3xl text-white sm:md mb-2 lg:px-2 sm:mr-10">Companies</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-purple-400">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <p className="text-base text-align-center text-white lg:text-xl sm:sm lg:px-14" id="numinc2">
                  {numinc2}+
                </p>
                <FaHandshake size={32} fill='red' className='lg:mx-16 lg:mt-2'/>
                <div className="font-bold lg:text-3xl text-white sm:md mb-2 lg:px-2 sm:mr-10">Employed</div>
              </div>
            </div>
          </div>
          <div className="">
            <p className='lg:ml-32 lg:mt-20 text-l'><u>connect</u> </p>
            <div className='flex'>

                <a href='#'>
                    <AiFillLinkedin size={32} fill={'#0072b1'} className='lg:ml-32 lg:mt-2'/>
                </a>
                <a href='#'>
                    <BiLogoGmail size={32} fill='orange' className=' lg:mx-2 lg:mt-2'/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberInc;
