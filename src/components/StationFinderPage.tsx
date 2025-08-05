// Filename: StationFinderPage.tsx

import React, { useState } from 'react';

// --- (1) Image Imports ---
import stationImage from '../assets/images/01_Bilder/Bild_4.png';
import mapImage from '../assets/images/01_Bilder/map.png';
import icon1 from "../assets/images/03_Icons/Icon_8.png";
import icon2 from "../assets/images/03_Icons/Icon_10.png";
import icon3 from "../assets/images/03_Icons/Icon_1.png";
import icon4 from "../assets/images/03_Icons/Icon_2.png";
import icon5 from "../assets/images/03_Icons/Icon_3.png";
import icon6 from "../assets/images/03_Icons/Icon_4.png";
import icon7 from "../assets/images/03_Icons/Icon_5.png";

// --- (2) SVG Icon Components ---
const ChargerIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 01-1 1H10a1 1 0 01-1-1V4a2 2 0 114 0v1a1 1 0 01-1 1H10a1 1 0 01-1-1V4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const AccessibilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

// --- (3) Data Definitions ---
const stationList = [
    { id: 1, name: "Lidl Munich – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 15, 47564 Mustercity", distance: "5.2 km", hours: "Mo-So: 09:00 - 22:00 h" },
    { id: 2, name: "MediaMarkt Munich – Parking lot", type: "Rapid Charger", power: "50 - 150 kW", address: "Musterstreet 39, 45678 Mustercity", distance: "7.2 km", hours: "Mo-So: 08:00 - 20:00 h" },
    { id: 3, name: "MediaMarkt Munich 02 – Parking lot", type: "Fast Charger", power: "11 - 22 kW", address: "Musterstreet 12, 47564 Mustercity", distance: "7.8 km", hours: "24/7" },
    { id: 4, name: "Lidl Munich 04 – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 88, 47564 Mustercity", distance: "8.1 km", hours: "Mo-So: 09:00 - 22:00 h" },
    { id: 5, name: "Lidl Munich 04 – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 88, 47564 Mustercity", distance: "8.1 km", hours: "Mo-So: 09:00 - 22:00 h" },
    { id: 6, name: "Lidl Munich 04 – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 88, 47564 Mustercity", distance: "8.1 km", hours: "Mo-So: 09:00 - 22:00 h" },
    { id: 7, name: "Lidl Munich 04 – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 88, 47564 Mustercity", distance: "8.1 km", hours: "Mo-So: 09:00 - 22:00 h" },
    { id: 8, name: "Lidl Munich 04 – Parking lot", type: "Ultra Rapid Charger", power: "150 - 400 kW", address: "Musterstreet 88, 47564 Mustercity", distance: "8.1 km", hours: "Mo-So: 09:00 - 22:00 h" },
];

const amenities = [
    { id: 1, name: 'Contactless Payment', icon: icon6 },
    { id: 2, name: 'RFID Charging Card', icon: icon3 },
    { id: 3, name: 'CHAdeMO', icon: icon4 },
    { id: 4, name: 'CSS', icon: icon7 },
    { id: 5, name: 'AC Type 2', icon: icon5 },
    { id: 6, name: 'Accessibility', icon: <AccessibilityIcon /> }, // This is a React Element
];

// --- (4) Child Components for a Clean and Reusable Structure ---

const StationList = ({ stations, selectedStationId, onStationSelect }: any) => (
    <div className="bg-white rounded-lg shadow-lg h-[100%] overflow-y-auto custom-scrollbar">
        <ul>
            {stations.map((station: any, index: number) => (
                <li
                    key={station.id}
                    onClick={() => onStationSelect(station.id)}
                    className={`p-4 cursor-pointer transition-colors ${index !== 0 ? 'border-t border-gray-200' : ''} ${selectedStationId === station.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                >
                    <div className="flex items-start space-x-4">
                        <ChargerIcon className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                        <div className="flex-grow">
                            <p className="font-bold text-gray-900 leading-tight">{station.name}</p>
                            <p className="text-sm text-gray-600">{station.type} – {station.power}</p>
                            <p className="text-sm text-gray-500 mt-1">{station.address}</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 ml-4 flex-shrink-0">{station.distance}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const StationDetails = ({ station }: any) => {
    if (!station) return null;

    return (
        <div className="space-y-8">
            <div className='flex flex-col md:flex-row gap-5'>
                <img src={stationImage} alt={station.name} className="w-full md:w-1/3 h-auto rounded-lg shadow-md" />
                <div className="flex-grow">
                    <div className="flex justify-between items-baseline">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{station.name}</h1>
                        <p className="text-gray-600 font-semibold ml-4">{station.distance}</p>
                    </div>
                    <p className="text-gray-600 mt-1">{station.address}</p>
                    
                    <div className="space-y-2 mt-4 border-t-2 border-gray-200 pt-4">
                        <div className="flex items-center text-gray-700 gap-3"><img src={icon1} alt='charger icon' className='w-7 h-auto' /> <span className="font-semibold">{station.type} – {station.power}</span></div>
                        <div className="flex items-center text-gray-700 gap-3"><img src={icon2} alt='clock icon' className='w-5 h-auto' /> <span><span className="font-semibold">Opening Hours:</span> {station.hours}</span></div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
                        <button className="flex-1 border border-gray-300 rounded-md py-2 px-6 text-gray-700 font-semibold hover:bg-gray-100 transition-colors">Plan Route</button>
                        <button className="flex-1 bg-gray-800 text-white rounded-md py-2 px-6 font-semibold hover:bg-gray-700 transition-colors">Launch E.ON Drive App</button>
                    </div>
                </div>
            </div>

            <div className="bg-[#f9f5f3] rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-4">Information</h2>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
                    {amenities.map(amenity => (
                        <div key={amenity.id} className="flex items-center space-x-3">
                            {/* === FIX IS HERE === */}
                            {/* We check if the icon is a string (a path) or an element (a component) */}
                            {typeof amenity.icon === 'string' ? (
                                <img src={amenity.icon} alt={amenity.name} className="h-12 w-10 object-fill" />
                            ) : (
                                amenity.icon
                            )}
                            <span className="font-bold text-gray-700 text-lg leading-tight">{amenity.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Find other Stations near you</h2>
                <img src={mapImage} alt="Map of nearby stations" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>
    );
};


// --- (5) The Main Page Component ---
const StationFinderPage: React.FC = () => {
    const [selectedStationId, setSelectedStationId] = useState(stationList[0].id);

    const handleStationSelect = (id: number) => {
        setSelectedStationId(id);
    };

    const selectedStation = stationList.find(station => station.id === selectedStationId);

    return (
        <div className="bg-white font-sans">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 xl:col-span-4">
                        <StationList 
                            stations={stationList} 
                            selectedStationId={selectedStationId} 
                            onStationSelect={handleStationSelect} 
                        />
                    </div>
                    <div className="lg:col-span-7 xl:col-span-8">
                        <StationDetails station={selectedStation} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StationFinderPage;