import React from 'react';

import { chargingSpeedsData } from '../data/data'; 

const ChargingSpeeds: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-40">
          Our Available Charging Speeds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {chargingSpeedsData.map((speed) => (
            <div key={speed.id} className="flex flex-col">
              
              <div className="relative bg-[#F9F8F6] h-70 p-6 pt-10 rounded-lg">
                
                <div className="absolute left-0 bottom-full mb-[-100px] flex items-center">
                  <img src={speed.image} alt={speed.title} className="h-48 w-auto object-contain " />
                
                <div className=" ml-[-40px]">
                  <h3 className="text-lg font-bold text-gray-900">{speed.title}</h3>
                  <p className="text-md text-gray-700">{speed.subtitle}</p>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Ranging from</p>
                    <p className="text-xl font-bold text-gray-800">{speed.powerRange}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-10">
                <hr className="border-gray-300 my-6" />
                <p className="text-gray-600 text-base leading-relaxed">
                  {speed.description}
                </p>
              </div>
                </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChargingSpeeds;