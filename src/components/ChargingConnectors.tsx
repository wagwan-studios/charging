import React from 'react';


import { connectorsData } from '../data/data'; 

const ChargingConnectors: React.FC = () => {
  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">

      
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">
          Charging Connectors - what is what?
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          
          {connectorsData.map((connector) => (
            <div key={connector.id}>
              
             
              <div className="flex justify-center mb-6">
                <img
                  src={connector.image}
                  alt={`${connector.title} connector`}
                  className="h-28 w-28 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {connector.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {connector.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChargingConnectors;