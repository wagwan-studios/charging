// Filename: SearchBar.tsx
import React from 'react';
import searchIcon from "../assets/images/03_Icons/Icon_9.png"
const SearchBar: React.FC = () => {
  return (
    <div className="pl-12 pb-30">
      <div className="flex items-center w-full max-w-[25%] gap-2">
        {/* Magnifying Glass Icon */}
        <img src={searchIcon} alt='search icon' className='w-8' />

        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search E.ON Drive Helpdesk"
          className="w-full py-3 pl-5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;