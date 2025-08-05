import React from 'react';

import { stationData } from '../data/stationData';
import chargerImg from '../assets/images/01_Bilder/Bild_12.png'; 
import bgImg from '../assets/images/06_Verläufe/Verlauf_2.png'; 
import icon from "../assets/images/03_Icons/Icon_8.png"
import { useNavigate } from 'react-router-dom';

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const AccessibilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const SpeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ChevronDown = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;


// == Main Component ==
const FindingStations: React.FC = () => {
  const navigate = useNavigate()

  const handleStationClick = (stationId: number) => {
        // You can put any condition you want here
        if (stationId === 1) {
            // Navigate to a specific route for station 1
            navigate("/stations"); 
        }
        // You could add else if conditions for other stations if needed
    };
  return (
    <div className="bg-white font-sans py-12 relative">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-red-600 mb-5" style={{ fontFamily: 'Eon, sans-serif' }}>
          Finding Stations
        </h2>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-xl mainsect" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
          
          {/* == Left Column (Search) == */}
          <div className="relative rounded-l-xl p-8 w-[90%] leftSect" >
            <div className="relative z-10">
              <div className="flex mb-4">
                <img src={chargerImg} alt="E.ON Drive Charger" className="w-24 h-30 -ml-4" />
                <div>
                <h3 className="text-2xl font-bold text-white ml-2">Find your next E.ON Drive charging point</h3>
              <p className="text-white mb-8 ml-2 mt-2">
                You can find E.ON Drive charging stations using the E.ON Drive Comfort App, or platforms like Google Maps, Apple Maps, Zap-Map, and A Better Route Planner.
              </p>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="space-y-4">
                <button className="w-full flex items-center p-3 border border-white rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition">
                  <LocationIcon /> Find my Location
                </button>
                <button className="w-full flex items-center p-3 border border-white rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition">
                  <HomeIcon /> Enter ZIP code/city
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-white rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition">
                  <div className="flex items-center"><AccessibilityIcon /> Accessibility</div>
                  <ChevronDown />
                </button>
                <button className="w-full flex items-center justify-between p-3 border border-white rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition">
                  <div className="flex items-center"><SpeedIcon /> Charging Speed</div>
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>
          
          {/* == Right Column (List) == */}
          <div className="bg-[#f9f5f3] w-[45%] rounded-r-xl p-8 absolute top-[50px] right-[55px] rightSect">
            <div className="flex justify-between items-center pb-3 mb-3 border-b-2 border-red-600">
              <h4 className="text-xl font-bold text-gray-800">
                40 charging stations <span className="block font-normal">within 10 km</span>
              </h4>
              <div className="text-right">
                <label className="text-sm text-gray-500 block">Search radius</label>
                <div className="text-lg font-bold text-red-600 border-b-2 border-red-600 flex items-center">
                  10 km <ChevronDown />
                </div>
              </div>
            </div>
            
            {/* Station List with Custom Scrollbar */}
            <div className="space-y-4 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {stationData.map((station) => (
                <div key={station.id} className="flex items-start gap-2 py-2 border-b border-gray-200 last:border-b-0" onClick={() => handleStationClick(station.id)}>
                  <img src={icon} alt='charger point icon' className='w-10 h-10'/>
                  <div className="flex-grow">
                    <p className="font-bold text-gray-900">{station.name}</p>
                    <p className="text-sm text-gray-600">{station.type} – {station.power}</p>
                    <p className="text-sm text-gray-500 mt-1">{station.address}</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 ml-4">{station.distance}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FindingStations;