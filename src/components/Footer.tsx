import React from 'react';
import img from "../assets/images/05_Screens/Footer_1.png"

const Footer: React.FC = () => {
  return (
    <div>
        <img src={img} alt='footer' style={{width:'100%'}}/>
    </div>
  );
};

export default Footer;