// components/Header.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FurtherQuestions from '../components/contactImage';
import img from '../assets/images/01_Bilder/Bild_23.png';
import HelpSection from '../components/HelpSection';
import FindingStations from '../components/FindingStations';
import Footer from '../components/Footer';

const Help: React.FC = () => {
    const bannerContent = {
        title: 'Help and Support',
        description: 'Find answers to common questions as well as hints and tips.',
        button: 'How to Charge',
        image: img
    }
  return (
   <>
    <Header/>
    <Hero title={bannerContent.title} description={bannerContent.description}
    image={bannerContent.image} button={bannerContent.button} />
    <HelpSection />
    <FindingStations />
    <FurtherQuestions/>
    <Footer />
   </>
  );
};

export default Help;