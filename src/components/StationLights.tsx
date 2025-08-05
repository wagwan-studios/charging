import React from 'react';

import { lightStatusData } from '../data/data'; 

const StationLights: React.FC = () => {
  return (
    <div className="bg-[#F9F8F6] font-sans py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
              The lights at our stations explained
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              
              {lightStatusData.map((status) => (
                <div key={status.id} className="flex items-center">
    
                  <img
                    src={status.image}
                    alt={`Charger with a ${status.title} light`}
                    className="w-32 h-auto rounded-md shadow-md mr-4"
                  />
 
                  <div>
                    <p className="font-bold text-gray-800">{status.title}</p>
                    <p className="text-sm text-gray-600">{status.description}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StationLights;