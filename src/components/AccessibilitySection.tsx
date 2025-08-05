import React from 'react';

import accessibilityImg from '../assets/images/01_Bilder/Bild_21.png'; 

const AccessibilitySection: React.FC = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 items-center">
          
          <div className="flex flex-col space-y-6">

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Accessibility at <br /> Our Stations
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Many of our stations are wheelchair accessible — and we’re adding more all the time.
              </p>
              <p>
                Check the app or on-site signs for details.
              </p>
            </div>
            <a
              href="#" 
              className="text-red-600 font-semibold inline-flex items-center group self-start"
            >
              More information on accessibility
              <span 
                aria-hidden="true" 
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
          <div>
            <img 
              src={accessibilityImg}
              alt="A row of accessible EV charging stations with marked parking bays"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySection;