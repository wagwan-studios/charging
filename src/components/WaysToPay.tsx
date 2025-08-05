// Filename: PaymentMethods.tsx

import React from 'react';
import icon1 from "../assets/images/03_Icons/Icon_4.png"
import icon2 from "../assets/images/03_Icons/Icon_5.png"
import icon3 from "../assets/images/03_Icons/Icon_6.png"


const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// === Data for the Cards ===
const paymentMethodsData = [
  {
    id: 'contactless',
    icon: icon1,
    title: 'Contactless Payment',
    description: 'Simply tap your credit card or smartphone – for fast, secure charging without the hassle of cash or terminals.',
  },
  {
    id: 'rfid',
    icon: icon2,
    title: 'RFID Charging Card',
    description: 'Start your session instantly with your RFID card – the perfect solution for frequent drivers who value speed and convenience.',
  },
  {
    id: 'qrcode',
    icon: icon3,
    title: 'Online Payment via QR Code',
    description: 'Scan the QR code on-site to pay with your phone – no app, no account, just instant access and total freedom.',
  },
];

// === Main Component ===
import bgImg from '../assets/images/06_Verläufe/Verlauf_3.png'; // Replace with your image path

const WaysToPay: React.FC = () => {
  return (
    <div 
      className="font-sans py-2 sm:py-8"
      style={{ 
        backgroundImage: `url(${bgImg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ways to pay at our charging stations
          </h2>
          <p className="text-xl text-white/90">
            We make charging easy with multiple payment options – fast, flexible, and built around your needs.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paymentMethodsData.map((method) => (
            <div key={method.id} className="bg-[#F9F8F6] rounded-lg p-8 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <div className="mb-2">
                <img src={method.icon} alt='icon' className='w-30'/> 
              </div>
              <p className="text-gray-700">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Pre-authorisation Info Box */}
        <div className="mt-12   rounded-lg p-6 ml-auto w-[65%]">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <InfoIcon />
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-white">Why is there a pre-authorisation fee?</h4>
              <p className="mt-1 text-white/90">
                A temporary £30 pre-authorisation is placed on your card at the start of your session to ensure sufficient funds. This hold is replaced by the actual charging cost once your session ends.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WaysToPay;