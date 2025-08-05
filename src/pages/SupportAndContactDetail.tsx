// components/Header.tsx
import React from 'react';
import Header from '../components/Header';
import HowToChargePage from '../components/HowToChargePage';
import HelpAndSupportHero from '../components/HelpAndSupportHero';
import FurtherQuestions from '../components/contactImage';
import Footer from '../components/Footer';


const SupportAndContactDetail: React.FC = () => {
  return (
   <>
    <Header/>
    <HelpAndSupportHero/>
    <HowToChargePage/>
    <FurtherQuestions/>
    <Footer/>
   </>
  );
};

export default SupportAndContactDetail;