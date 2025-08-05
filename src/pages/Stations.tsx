// components/Header.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationFinderPage from '../components/StationFinderPage';
import FurtherQuestions from '../components/contactImage';


const Stations: React.FC = () => {
 
  return (
   <>
    <Header/>
     <StationFinderPage/>
    <FurtherQuestions/>
    <Footer/>
   </>
  );
};

export default Stations;