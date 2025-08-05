import React from 'react';
import callImg from "../assets/images/03_Icons/Icon_7.png"

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

import contactImage from '../assets/images/01_Bilder/Bild_6.png';
import bgImg from '../assets/images/06_Verläufe/Verlauf_1.png';

const FurtherQuestions: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-[100%] min-h-120"  style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">


          <div className="hidden lg:block">
            <img 
              src={contactImage} 
              alt="Woman smiling while using her phone next to an electric vehicle" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className=" text-white p-8 sm:p-12 lg:p-16">
            <div className="space-y-8">
              

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</p>
                <h2 className="text-4xl sm:text-5xl font-bold mt-2">Any further questions?</h2>
              </div>
              <button className="w-full sm:w-auto flex justify-between items-center text-left border border-white/50 rounded-lg py-3 px-5 group hover:bg-white/10 transition-all duration-300">
                <span>Select Country</span>
                <ChevronDownIcon />
              </button>

              <div className="flex items-start pt-8 border-t border-white/20">
                <div className="flex-shrink-0">
                  <img src={callImg} alt='call icon' className='w-10' />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">24/7 support for all your issues regarding our services</h3>
                  <p className="mt-2 text-white/90">
                    Give us a call: <span className="font-bold">XXXXXXXX</span>
                  </p>
                  <p className="text-white/90">
                    Contact us via email: <span className="font-bold">hello@XXXXXX</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FurtherQuestions;