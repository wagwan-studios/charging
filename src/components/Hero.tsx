import React from 'react';
import img from "../assets/images/01_Bilder/Bild_7.png";
import bgImg from "../assets/images/06_Verläufe/Verlauf_3.png"

interface HeroProps {
  title: string;
  description: string;
  button?: string;
  image?: string;
}
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const Hero: React.FC<HeroProps> = ({ title, description, button, image }) => {
  return (
    <div className="relative bg-center bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="max-w-[90%] mx-auto px-4 py-12 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/3 pt-10 herocontent">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 text-white pt-5" style={{fontFamily:"Eon"}}>{title}</h1>
          <div
            className="mb-6 space-y-2 text-white text-xl"
            dangerouslySetInnerHTML={{ __html: description }} // Render HTML description
          ></div>
          {button && (
            <button className="text-white w-full gap-14 sm:w-auto flex justify-between items-center text-left border border-white/50 rounded-lg py-3 px-5 group hover:bg-white/10 transition-all duration-300 cutombtn">
                <span>{button}</span>
                <ChevronDownIcon />
              </button>
          )}
        </div>
        <div className="md:w-1/1 mt-6 md:mt-0 absolute bottom-[-100px] right-[-40%]">
          <img
            src={image ?? img}
            alt="EV Charging"
            className="rounded-lg shadow-lg w-[60%] max-h-120 heroImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;