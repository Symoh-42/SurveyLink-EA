// pages/HomePage.jsx
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            icon: "📐",
            title: "Land Surveying",
            description: "Precision boundary surveys, topographic mapping, and cadastral services with advanced GPS technology.",
            features: ["Boundary Determination", "Topographic Surveys", "Construction Staking", "Subdivision Planning"]
        },
        {
            icon: "🗺️",
            title: "GIS & Mapping",
            description: "Advanced geographic information systems for spatial data analysis and interactive mapping solutions.",
            features: ["Spatial Analysis", "Digital Mapping", "Data Management", "Custom GIS Solutions"]
        },
        {
            icon: "🏗️",
            title: "Urban Planning",
            description: "Comprehensive development planning, zoning analysis, and regulatory compliance services.",
            features: ["Master Planning", "Zoning Analysis", "Environmental Assessment", "Development Control"]
        },
        {
            icon: "📊",
            title: "Project Management",
            description: "End-to-end project oversight, consultancy services, and development monitoring.",
            features: ["Project Coordination", "Quality Control", "Budget Management", "Timeline Supervision"]
        }
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "10+", label: "Years of Experience" },
        { number: "8", label: "Counties Covered" },
        { number: "100%", label: "Client Satisfaction" },
    ];

    const featuredProjects = [
        {
            title: "Nairobi Metro Expansion",
            location: "Nairobi County",
            type: "Urban Planning",
            image: "/api/placeholder/400/300",
            description: "Comprehensive urban planning for Nairobi's metropolitan expansion"
        },
        {
            title: "Coastal Infrastructure Mapping",
            location: "Mombasa Coast",
            type: "GIS & Surveying",
            image: "/api/placeholder/400/300",
            description: "Detailed topographic mapping for coastal development projects"
        },
        {
            title: "Agricultural Land Use",
            location: "Rift Valley",
            type: "Land Surveying",
            image: "/api/placeholder/400/300",
            description: "Land parcelization and surveying for agricultural optimization"
        }
    ];

    const testimonials = [
        {
            name: "James Mwangi",
            company: "Greenland Developers",
            text: "SurveyLink EA delivered exceptional precision in our 50-acre development project. Their attention to detail saved us significant time and resources.",
            rating: 5
        },
        {
            name: "Sarah Chengo",
            company: "County Government",
            text: "The GIS solutions provided revolutionized our urban planning department. Professional, timely, and incredibly accurate work.",
            rating: 5
        },
        {
            name: "Robert Omondi",
            company: "InfraBuild Ltd",
            text: "Outstanding project management and surveying services. They've been our go-to consultants for all major construction projects.",
            rating: 5
        }
    ];

    const technologies = [
        { name: "GPS Technology", icon: "🛰️" },
        { name: "Drone Surveying", icon: "🚁" },
        { name: "3D Laser Scanning", icon: "📡" },
        { name: "Digital Mapping", icon: "💻" },
        { name: "CAD Software", icon: "✏️" },
        { name: "Remote Sensing", icon: "🔭" }
    ];

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section with Aerial Background */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 overflow-hidden">
                {/* Floating Animated Dots */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-300 rounded-full animate-bounce"></div>
                </div>

                {/* Subtle Pattern Background */}
                <div
                    className="absolute inset-0 bg-repeat opacity-30"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>

                {/* Watermark Logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="text-9xl font-bold text-white font-poppins rotate-12 select-none">
                        SL
                    </div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Tagline */}


                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mt-20 font-poppins leading-tight">
                        Precision
                        <span className="text-emerald-400 block mt-2">In Every</span>
                        <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                            Measurement
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Professional surveying and planning consultancy serving Kenya and the
                        wider East African region. We deliver{" "}
                        <span className="text-emerald-300 font-semibold">
                            innovative spatial solutions
                        </span>{" "}
                        with uncompromising accuracy for sustainable development.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                        <a
                            href="/services"
                            className="group bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 flex items-center space-x-2"
                        >
                            <span>Explore Our Services</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a
                            href="https://wa.me/254718296465"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>💬</span>
                            <span>WhatsApp Consultation</span>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                            >
                                <div className="text-2xl font-bold text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-emerald-200 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Why SurveyLink EA?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Combining traditional expertise with cutting-edge technology to deliver exceptional results across East Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Regional Expertise</h3>
                            <p className="text-gray-600">
                                Deep understanding of East Africa's unique geographical and regulatory landscape.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Turnaround</h3>
                            <p className="text-gray-600">
                                Efficient project delivery without compromising on quality or accuracy.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💎</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
                            <p className="text-gray-600">
                                Commitment to the highest standards of precision and professional excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-poppins bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Advanced Technology</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Utilizing state-of-the-art equipment and software to ensure precision and efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-emerald-200"
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Our Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive spatial and planning solutions tailored for the unique challenges of East Africa's developing landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-emerald-200 hover:transform hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <span className="text-emerald-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="/services"
                                    className="inline-block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 group-hover:shadow-lg"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Featured Projects</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Showcasing our expertise through successful projects across East Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="h-48 bg-gradient-to-br from-emerald-500 to-green-400 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-2 flex items-center">
                                        <span className="text-emerald-500 mr-2">📍</span>
                                        {project.location}
                                    </p>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                    <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center">
                                        View Case Study
                                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4 font-poppins">What Our Clients Say</h2>
                    <p className="text-emerald-100 text-xl mb-12">
                        Trusted by developers, government agencies, and businesses across East Africa.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
                        <div className="text-6xl mb-4">❝</div>
                        <p className="text-xl text-emerald-50 mb-6 italic">
                            "{testimonials[currentTestimonial].text}"
                        </p>
                        <div className="flex items-center justify-center space-x-1 mb-4">
                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                <span key={i} className="text-yellow-300">⭐</span>
                            ))}
                        </div>
                        <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                        <div className="text-emerald-200">{testimonials[currentTestimonial].company}</div>
                    </div>

                    <div className="flex justify-center space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-repeat"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6 font-poppins">Ready to Start Your Project?</h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Join dozens of satisfied clients who trust SurveyLink EA for precision surveying and planning solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a
                            href="/contact"
                            className="group bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 flex items-center space-x-2"
                        >
                            <span>Get Free Consultation</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a
                            href="https://wa.me/254718296465"
                            className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center space-x-2"
                        >
                            <span>📱</span>
                            <span>WhatsApp +254 718 296465</span>
                        </a>
                    </div>

                    <div className="text-emerald-200 text-sm">
                        🕒 Typically respond within 30 minutes during business hours
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;