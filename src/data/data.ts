// You can place this in a file like 'src/data.ts' and import it,
// or include it directly in your component file.

// Make sure to replace these with the actual paths to your images.
import destinationImg from '../assets/images/01_Bilder/Bild_8.png';
import neighbourhoodImg from '../assets/images/01_Bilder/Bild_9.png';
import enRouteImg from '../assets/images/01_Bilder/Bild_10.png';

export const chargingOptionsData = [
  {
    id: 1,
    image: destinationImg,
    title: 'Destination Charging',
    description: "We're there – where your journey leads.",
    link: '',
  },
  {
    id: 2,
    image: neighbourhoodImg,
    title: 'Neighbourhood Charging',
    description: 'Charge close to home – convenient and reliable.',
    link: '', 
  },
  {
    id: 3,
    image: enRouteImg,
    title: 'En Route Charging',
    description: 'From city to seaside – seamless charging wherever you go.',
    link: '', 
  },
];



import ultraRapidImg from '../assets/images/01_Bilder/Bild_13.png';
import rapidImg from '../assets/images/01_Bilder/Bild_14.png';
import fastImg from '../assets/images/01_Bilder/Bild_15.png';

export const chargingSpeedsData = [
  {
    id: 'ultra-rapid',
    image: ultraRapidImg,
    title: 'Ultra Rapid Charger',
    subtitle: 'HPC Chargers',
    powerRange: '150 - 400 kW',
    description: 'Placed at motorways, transit hubs, and major routes. Up to 80% charge in ~30 minutes gets you back on the road, fast.',
  },
  {
    id: 'rapid',
    image: rapidImg,
    title: 'Rapid Charger',
    subtitle: 'DC Fast Chargers',
    powerRange: '50 - 150 kW',
    description: 'Found at supermarkets, gyms, and shopping centers. Our rapid chargers are perfect for 30 to 90-minute stays. Charge up while you take care of your daily errands.',
  },
  {
    id: 'fast',
    image: fastImg,
    title: 'Fast Charger',
    subtitle: 'AC Chargers',
    powerRange: '11 - 22 kW',
    description: 'Ideal for residential areas, curbsides, or office parking and anywhere you stay for several hours. Because when your car has time, a slower, cost-efficient charge makes perfect sense.',
  },
];




import chademoImg from '../assets/images/03_Icons/Icon_1.png';
import ccsImg from '../assets/images/03_Icons/Icon_2.png';
import type2Img from '../assets/images/03_Icons/Icon_3.png';

export const connectorsData = [
  {
    id: 'chademo',
    image: chademoImg,
    title: 'CHAdeMO',
    description: "CHAdeMO is a fast charging connector mainly used by some Japanese electric cars. It allows rapid DC charging, so you can quickly recharge your battery on the go. It's a bit older but still common at many charging stations.",
  },
  {
    id: 'ccs',
    image: ccsImg,
    title: 'CCS (Combined Charging System)',
    description: 'CCS combines Type 2 AC charging with a DC fast charging plug in one connector. It’s the newest and fastest option, letting you charge quickly on highways and public stations. Most modern EVs in Europe support CCS for versatile and speedy charging.',
  },
  {
    id: 'type2',
    image: type2Img,
    title: 'AC Type 2',
    description: 'Type 2 is the most common connector for charging your EV with alternating current (AC) in Europe. It’s typically used for slower, everyday charging at home or public stations. Type 2 can deliver a steady and safe charge.',
  },
];



import greenLightImg from '../assets/images/01_Bilder/Bild_17.png';
import whiteLightImg from '../assets/images/01_Bilder/Bild_18.png';
import redLightImg from '../assets/images/01_Bilder/Bild_19.png';
import blueLightImg from '../assets/images/01_Bilder/Bild_20.png';

export const lightStatusData = [
  {
    id: 'green',
    image: greenLightImg,
    title: 'Green',
    description: 'Charger is available and ready to use',
  },
  {
    id: 'white',
    image: whiteLightImg,
    title: 'White',
    description: 'Done charging',
  },
  {
    id: 'red',
    image: redLightImg,
    title: 'Red',
    description: 'Charger is currently in use',
  },
  {
    id: 'blue',
    image: blueLightImg,
    title: 'Blue',
    description: 'Charger is available and ready to use',
  },
];


import helpImg1 from '../assets/images/01_Bilder/Bild_25.png';
import helpImg2 from '../assets/images/01_Bilder/Bild_7.png';
import helpImg3 from '../assets/images/01_Bilder/Bild_11.png';
import helpImg4 from '../assets/images/01_Bilder/Bild_27.png';

export const HelpSectionData = [
  {
    id: 0,
    image: helpImg1,
    title: 'How to charge',
    link: "#",
  },
  {
    id: 1,
    image: helpImg2,
    title: 'Payment & Billing',
    link: "#",
  },
  {
    id: 2,
    image: helpImg3,
    title: 'Charging Issues',
    link: "#",
  },
  {
    id: 3,
    image: helpImg4,
    title: 'Accessibility',
    link: "#",
  },
];