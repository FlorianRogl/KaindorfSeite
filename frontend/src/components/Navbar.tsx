import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            title: 'Ausbildung',
            dropdown: [
                'Mechatronik',
                'Automatisierungstechnik',
                'Robotik & Smart Engineering',
                'Informatik'
            ]
        },
        {
            title: 'Schule',
            dropdown: [
                'Über uns',
                'Leitbild',
                'Schulleitung',
                'Lehrerteam'
            ]
        },
        {
            title: 'Service',
            dropdown: [
                'Anmeldung',
                'Termine',
                'Downloads',
                'Jobbörse'
            ]
        },
        {
            title: 'Projekte',
            dropdown: [
                'Diplomarbeiten',
                'Wettbewerbe',
                'Partnerfirmen',
                'Forschung'
            ]
        },
        { title: 'News', link: '#news' },
        { title: 'Kontakt', link: '#kontakt' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-lg py-5' : 'bg-white/95 backdrop-blur-md py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex flex-col">
                            <img src={"/img.png"}/>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.dropdown ? (
                                    <div>
                                        <button
                                            className="px-4 py-3 text-gray-700 hover:text-[#6b46c1] font-medium transition-colors duration-200 flex items-center gap-1"
                                            onMouseEnter={() => setDropdownOpen(index)}
                                            onMouseLeave={() => setDropdownOpen(null)}
                                        >
                                            {item.title}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {dropdownOpen === index && (
                                            <div
                                                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                                                onMouseEnter={() => setDropdownOpen(index)}
                                                onMouseLeave={() => setDropdownOpen(null)}
                                            >
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href="#"
                                                        className="block px-4 py-3 text-gray-700 hover:bg-[#6b46c1] hover:text-white transition-colors duration-200"
                                                    >
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={item.link}
                                        className="px-4 py-3 text-gray-700 hover:text-[#6b46c1] font-medium transition-colors duration-200"
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </div>
                        ))}
                        <button className="ml-4 px-6 py-3 bg-[#6b46c1] text-white rounded-full hover:bg-[#5a3ba8] transition-colors duration-200 font-medium">
                            Anmeldung
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[#6b46c1] p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item, index) => (
                                <div key={index}>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#6b46c1] font-medium transition-colors duration-200 flex items-center justify-between"
                                                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                                            >
                                                {item.title}
                                                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === index ? 'rotate-180' : ''}`} />
                                            </button>
                                            {dropdownOpen === index && (
                                                <div className="pl-4 space-y-1">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href="#"
                                                            className="block px-4 py-2 text-gray-600 hover:text-[#6b46c1] transition-colors duration-200"
                                                        >
                                                            {subItem}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="block px-4 py-3 text-gray-700 hover:text-[#6b46c1] font-medium transition-colors duration-200"
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}
                            <button className="mx-4 mt-4 px-6 py-3 bg-[#6b46c1] text-white rounded-full hover:bg-[#5a3ba8] transition-colors duration-200 font-medium">
                                Anmeldung
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;