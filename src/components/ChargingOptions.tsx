// Filename: ChargingOptions.tsx
import React from 'react';
import { chargingOptionsData } from '../data/data'; // Adjust the import path as needed
import SearchBar from './SearchBar';

const ChargingOptions: React.FC = () => {
  return (
    <div className="bg-white py-5 sm:py-10">
        <SearchBar/>
      <div className="max-w-[90%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {chargingOptionsData.map((option) => (
            <div key={option.id}>
              {/* Image Container */}
              <div className="mb-4">
                <img
                  className="rounded-lg shadow-md w-full h-full object-cover"
                  src={option.image}
                  alt={option.title}
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-base text-gray-600 mb-4 min-h-10">
                {option.description}
              </p>

              {/* More Information Link */}
              <a
                // href={option.link}
                className="text-red-600 font-semibold inline-flex items-center group text-lg"
              >
                More Information
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChargingOptions;