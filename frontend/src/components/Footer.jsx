import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// Footer Component
const Footer = () => {
    const services = [
        { name: 'Land Surveying', href: '/services/land-surveying' },
        { name: 'GIS & Mapping', href: '/services/gis-mapping' },
        { name: 'Urban Planning', href: '/services/urban-planning' },
        { name: 'Project Management', href: '/services/project-management' },
    ];

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Insights', href: '/news' },
    ];

    const socials = [
        { name: "Facebook", href: "https://facebook.com/yourpage", icon: Facebook },
        { name: "Twitter", href: "https://twitter.com/yourhandle", icon: Twitter },
        { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin },
        { name: "Instagram", href: "https://instagram.com/yourpage", icon: Instagram },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">SL</span>
                            </div>
                            <h3 className="text-xl font-bold font-poppins">SurveyLink EA</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                            Professional surveying and planning consultancy serving Kenya and East Africa with precision, reliability, and innovative spatial solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socials.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                                >
                                    <span className="sr-only">{name}</span>
                                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-poppins">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        to={service.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-poppins">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-poppins">Contact</h4>
                        <address className="text-gray-400 not-italic space-y-3 text-sm">
                            <div className="flex items-start">
                                <svg className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Nairobi, Kenya<br />East Africa Region</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-4 w-4 mr-3 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+254718296465" className="hover:text-emerald-400 transition-colors duration-300">
                                    +254 718 296465
                                </a>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-4 w-4 mr-3 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:simongichigi920@gmail.com" className="hover:text-emerald-400 transition-colors duration-300">
                                    simongichigi920@gmail.com
                                </a>
                            </div>
                        </address>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; 2024 SurveyLink EA. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link to="/sitemap" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;