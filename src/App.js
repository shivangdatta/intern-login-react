import './App.css';
import img1a from './assets/img1a.png';
import Signup from './login/Signup';
import Headingtext from './login/Headingtext';
import NumberInc from './login/Numberinc';
import Login from './login/Login';
import { useEffect, useState } from 'react';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the screen width breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <div className="lg:flex">
      <div className="lg:flex lg:p-20 sm:p-10 sm:w-full ">
        <div className="lg:h-full sm:h-5 lg:h-auto lg:w-80 flex-none rounded-t lg:rounded-t-none lg:rounded-l bg-[#90EE90] text-center overflow-hidden">
          <img src={img1a} className="mt-12" alt="Logo" />
        </div>
        <div className="flex flex-col justify-between leading-normal">
          <Signup />
          {/* <Login/> */}
        </div>
      </div>
      <div className=" text-align-left lg:w-full lg:p-20 xl:p-25 2xl:p-30 sm:w-full ">
        {isSmallScreen ?
        (
          <>
          <br/><br/><br/>
          <span className='text-align-cente text-3xl font-bold  ml-32'><u>Hire-Co</u><br/><br/></span>
          </>
        )
        : (
            <div>
              <Headingtext />
            </div>
        )}
      <div className='text-xl font-serif sm:w-full'>
    
        Offering Hiring solutions for companies of all sizes at no hidden costs , Find the right employees tailor made to your requirements.<br/>
        We offer a platform where you can hire professionals from all backgrounds and at all experience levels.<br/>
        Many exciting features with detailed analytics of prespective employees.
        <br/>
      </div>
      <NumberInc/>
      </div>
    </div>
  );
}

export default App;
