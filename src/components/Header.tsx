
import React, { useState } from 'react';
import actionIcons from "../assets/images/05_Screens/Screen_Navi.png";
import { useNavigate } from 'react-router-dom';


const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
  

    const navLinks = [
        { href: '#', text: 'Shop' },
        { href: '#', text: 'Charging solutions' },
        { href: '#', text: 'Products & Services' },
        { href: '#', text: 'Success stories' },
        { href: '#', text: 'About' },
        { href: '/charging/help', text: 'Support & Contact' },
        { href: '#', 'text': 'Blog' },
    ];

    return (
        <header className="shadow-sm bg-white sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto flex space-x-4 py-2 px-4 sm:px-6 lg:px-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-semibold">Business customers</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Private customers</a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    
                    <div className="flex-shrink-0">
                       
                    </div>

                    <nav className="hidden lg:flex lg:space-x-6">
                        {navLinks.map((link) => (
                            <a key={link.text} href={link.href} className="text-gray-700 hover:text-red-600 text-sm font-normal transition-colors">
                                {link.text}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img src={actionIcons} alt="Actions" className="h-6 w-auto" />
                        </div>

                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-200`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.text}
                            // href={link.href}
                            onClick={()=>navigate(link.href)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;