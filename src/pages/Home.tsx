// components/Header.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ChargingOptions from '../components/ChargingOptions';
import VideoCta from '../components/VideoCta';
import FindingStations from '../components/FindingStations';
import ChargingSpeeds from '../components/ChargingSpeeds';
import ChargeTimeCalculator from '../components/ChargeTimeCalculator';
import ChargingConnectors from '../components/ChargingConnectors';
import WaysToPay from '../components/WaysToPay';
import StationLights from '../components/StationLights';
import AccessibilitySection from '../components/AccessibilitySection';
import FurtherQuestions from '../components/contactImage';
import Footer from '../components/Footer';
import img from "../assets/images/01_Bilder/Bild_7.png";

const Home: React.FC = () => {
  const homeDesc = `Find out what we offer and how EV charging works — simple, practical, and ready for your journey.
                    <br/><br/>Charging for everyone, everywhere.`;
  return (
   <>
    <Header/>
     <Hero title='A Beginners Guide to EV Charging' description={homeDesc} image={img} />
    <ChargingOptions/>
    <VideoCta/>
    <FindingStations/>
    <ChargingSpeeds/>
    <ChargeTimeCalculator/>
    <ChargingConnectors/>
    <WaysToPay/>
    <StationLights/>
    <AccessibilitySection/>
    <FurtherQuestions/>
    <Footer/>
   </>
  );
};

export default Home;