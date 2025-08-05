
import React from 'react';
import chargerImage from '../assets/images/01_Bilder/Bild_16.png'; 
import bgImg from '../assets/images/06_Verläufe/Verlauf_1.png'; 


const CarChargerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6a2 2 0 012-2h1.382a2 2 0 011.09.317l1.44 1.082a2 2 0 001.09.317H12a2 2 0 012 2v2a2 2 0 01-2 2H8.882a2 2 0 00-1.09.317L6.35 13.7a2 2 0 01-1.09.317H3a2 2 0 01-2-2V8a2 2 0 012-2h1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9.75l-3 3m0 0l-3-3m3 3V3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75l.47-2.224a2.25 2.25 0 012.12-1.896h3.818a2.25 2.25 0 012.12 1.896l.47 2.224M4.5 15.75h15" />
    <circle cx="7.5" cy="19.5" r="1.5" />
    <circle cx="16.5" cy="19.5" r="1.5" />
  </svg>
);

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const ChargeTimeCalculator: React.FC = () => {
  return (
    <div className="py-10 mt-15">
      <div className="max-w-[93%] ml-auto mr-auto">
        {/* Main responsive grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center relative mainsect" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', width:'80%', marginLeft:'auto' }}>
          
          {/* == Left Column: Image == */}
          <div className="px-4 leftSect1">
            <img 
              src={chargerImage} 
              alt="Man charging an electric vehicle" 
              className="rounded-lg shadow-2xl absolute top-[-150px] left-[-180px] timeCalImg"
              style={{width:'700px'}} 
            />
          </div>
        
          <div className="relative rightSect1" >
            
            <div className="relative  text-white rounded-lg p-8  ">
              
              <div className="flex items-center mb-6">
                <CarChargerIcon />
                <h2 className="text-2xl font-bold ml-4">How long it takes your car to charge</h2>
              </div>
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-white/20">

                <div>
                  <label className="text-sm font-semibold text-white/80">Select your EV:</label>
                  <button className="flex items-center text-lg mt-1 font-semibold">
                    Tesla Model S
                    <ChevronDownIcon />
                  </button>
                </div>
                {/* Charger Selection */}
                <div>
                  <label className="text-sm font-semibold text-white/80">Choose your Charger:</label>
                  <div className="flex items-center space-x-4 mt-1 text-lg">
                    <button className="font-semibold text-white/60 hover:text-white">50 kW</button>
                    <button className="font-bold text-white underline decoration-2 underline-offset-4">150 kW</button>
                    <button className="font-semibold text-white/60 hover:text-white">300 kW</button>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="pt-6">
                <p className="text-sm font-semibold text-white/80">Charging Results</p>
                <p className="text-lg mt-1">Max Speed: 60 kW</p>
                <p className="text-lg">100 km ≈ 10 min</p>
              </div>
            </div>

            {/* Bottom Solid Red Box */}
            {/* The negative margin and z-index are key to the layered look */}
            <div className="relative text-white rounded-lg  p-4 -mt-4  z-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <InfoIcon />
                </div>
                <p className="ml-3 text-sm">
                  Why your car isn't charging at maximum speed – <a href="#" className="font-semibold underline">see your charging curve</a> to understand the limits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeTimeCalculator;