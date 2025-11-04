import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Detect current route
    const isHome = location.pathname === "/";

    // Handle scroll for transparency transition
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    // Determine header background & text color logic
    const isSolid = !isHome || isScrolled; // Always solid on non-home pages
    const bgClass = isSolid ? "bg-white shadow-lg py-3" : "bg-transparent py-6";
    const textColor = isSolid ? "text-gray-800" : "text-white";
    const subTextColor = isSolid ? "text-gray-600" : "text-gray-200";
    const linkColor = isSolid ? "text-gray-700" : "text-white";
    const linkHover = isSolid ? "hover:text-emerald-600" : "hover:text-emerald-200";

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">SL</span>
                            </div>
                            <div>
                                <h1 className={`text-xl font-bold font-poppins ${textColor}`}>
                                    SurveyLink EA
                                </h1>
                                <p className={`text-xs ${subTextColor}`}>Precision in Every Project</p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`font-medium relative py-2 transition-all duration-300 ${linkColor} hover:text-emerald-600 group`}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="https://wa.me/254718296465"
                            className={`font-medium transition-colors ${linkColor} ${linkHover}`}
                        >
                            +254 718 296465
                        </a>
                        <Link
                            to="/contact"
                            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md transition-colors ${linkColor}`}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-xl rounded-lg mt-4 py-4 animate-fadeIn">
                        <div className="px-4 space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-3 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:bg-gray-50 rounded-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <a
                                    href="https://wa.me/254718296465"
                                    className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    +254 718 296465
                                </a>
                                <Link
                                    to="/contact"
                                    className="block mx-3 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-emerald-700 transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
