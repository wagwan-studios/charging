import React from 'react';

import videoThumbnailImg from '../assets/images/01_Bilder/Bild_11.png';
import bgImg from "../assets/images/06_Verläufe/Verlauf_1.png";

const VideoCta: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-[90%] w-full mx-auto shadow-2xl rounded-xl">
        <div 
          className="flex flex-col lg:flex-row w-full" 
          style={{ 
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',      
            backgroundPosition: 'center',  
            backgroundRepeat: 'no-repeat' 
          }}
        >
          <div className="relative lg:w-7/12">
            <img
              src={videoThumbnailImg}
              alt="A close-up of an electric car being charged"
              className="relative w-full h-full object-cover min-h-[300px] mt-[-30px] ml-[-30px]"
            />
            <div className="absolute inset-0 flex justify-center items-center ">
              <button
                aria-label="Play Video"
                className="group w-20 h-20 bg-opacity-30 rounded-full flex justify-center items-center backdrop-blur-sm transition hover:bg-opacity-50"
              >
                <svg
                  className="w-12 h-12 text-white ml-1 transform transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              All you need to know about the charging process in one video
            </h2>
            <a
              href="#" 
              className="w-full sm:w-auto self-start border border-white text-white rounded-lg py-3 px-5 flex justify-between items-center group hover:bg-white hover:text-red-500 transition-all duration-300"
            >
              <span className="font-semibold">See more Videos</span>
              <svg
                className="w-5 h-5 ml-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCta;