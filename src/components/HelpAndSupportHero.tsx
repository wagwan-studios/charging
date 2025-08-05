import React from 'react';
import searchIcon from "../assets/images/03_Icons/Icon_9.png"

import bgImg from '../assets/images/06_Verläufe/Verlauf_4.png';

const HelpAndSupportHero: React.FC = () => {
  return (
    <div
      className="font-sans"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 
            className="text-4xl md:text-6xl font-bold text-white italic"
            // The custom italic font from the image is applied here
            style={{ fontFamily: 'Eon, serif' }}
          >
            Help and Support
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl text-white/90 ">
            Find answers to common questions <br/> as well as hints and tips.
          </p>

          {/* Search Bar */}
          <div className="mt-10 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <img src={searchIcon} alt='search icon' className='w-7' />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search E.ON Drive Helpdesk"
              className="block w-full max-w-sm py-3 pl-12 pr-5 text-gray-900 placeholder-gray-500 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportHero;