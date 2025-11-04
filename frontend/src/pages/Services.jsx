// pages/ServicesPage.jsx
import React, { useState } from 'react';

const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);

    const serviceCategories = [
        { id: 'all', name: 'All Services', icon: '🌟' },
        { id: 'surveying', name: 'Land Surveying', icon: '📐' },
        { id: 'gis', name: 'GIS & Mapping', icon: '🗺️' },
        { id: 'planning', name: 'Urban Planning', icon: '🏗️' },
        { id: 'consulting', name: 'Consulting', icon: '📊' }
    ];

    const allServices = [
        {
            id: 1,
            title: "Boundary Surveying",
            category: "surveying",
            icon: "📍",
            description: "Precise determination and marking of property boundaries with legal compliance.",
            features: [
                "Property Line Identification",
                "Boundary Monumentation",
                "Easement Verification",
                "Legal Description Preparation",
                "Dispute Resolution Support"
            ],
            technologies: ["GPS Rover Systems", "Total Stations", "CAD Software"],
            deliveryTime: "3-7 days",
            startingPrice: "KES 15,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 2,
            title: "Topographic Mapping",
            category: "surveying",
            icon: "🏞️",
            description: "Detailed mapping of natural and man-made features for development planning.",
            features: [
                "Contour Line Mapping",
                "Feature Identification",
                "Elevation Data Collection",
                "Slope Analysis",
                "Digital Terrain Modeling"
            ],
            technologies: ["Drone Surveying", "LiDAR", "3D Modeling Software"],
            deliveryTime: "5-10 days",
            startingPrice: "KES 25,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 3,
            title: "Construction Staking",
            category: "surveying",
            icon: "🏗️",
            description: "Accurate placement of reference points for construction projects.",
            features: [
                "Foundation Layout",
                "Grade Staking",
                "Utility Location",
                "As-built Verification",
                "Construction Monitoring"
            ],
            technologies: ["Robotic Total Stations", "GPS", "Building Information Modeling"],
            deliveryTime: "2-5 days",
            startingPrice: "KES 20,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 4,
            title: "GIS Data Analysis",
            category: "gis",
            icon: "📈",
            description: "Advanced spatial analysis and data interpretation for informed decision-making.",
            features: [
                "Spatial Pattern Analysis",
                "Data Visualization",
                "Trend Analysis",
                "Predictive Modeling",
                "Custom Reporting"
            ],
            technologies: ["ArcGIS Pro", "QGIS", "Python Scripting"],
            deliveryTime: "7-14 days",
            startingPrice: "KES 35,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 5,
            title: "Digital Mapping",
            category: "gis",
            icon: "💻",
            description: "Creation of interactive digital maps for various applications and platforms.",
            features: [
                "Web Map Development",
                "Mobile Mapping Solutions",
                "Custom Cartography",
                "Data Integration",
                "Real-time Updates"
            ],
            technologies: ["Web GIS", "Mobile SDKs", "Cloud Platforms"],
            deliveryTime: "10-20 days",
            startingPrice: "KES 45,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 6,
            title: "Urban Master Planning",
            category: "planning",
            icon: "🏙️",
            description: "Comprehensive planning for sustainable urban development and growth management.",
            features: [
                "Land Use Planning",
                "Infrastructure Design",
                "Zoning Analysis",
                "Environmental Impact Assessment",
                "Stakeholder Engagement"
            ],
            technologies: ["Urban Planning Software", "Simulation Tools", "CAD Systems"],
            deliveryTime: "30-60 days",
            startingPrice: "KES 120,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 7,
            title: "Site Planning",
            category: "planning",
            icon: "📋",
            description: "Optimal site utilization and development planning for maximum efficiency.",
            features: [
                "Site Analysis",
                "Development Feasibility",
                "Access Planning",
                "Utility Planning",
                "Landscape Integration"
            ],
            technologies: ["Site Planning Software", "3D Visualization", "Environmental Tools"],
            deliveryTime: "15-30 days",
            startingPrice: "KES 50,000",
            image: "/api/placeholder/400/250"
        },
        {
            id: 8,
            title: "Project Management",
            category: "consulting",
            icon: "👨‍💼",
            description: "End-to-end project oversight ensuring timely delivery and quality control.",
            features: [
                "Project Coordination",
                "Budget Management",
                "Timeline Supervision",
                "Quality Assurance",
                "Stakeholder Communication"
            ],
            technologies: ["Project Management Software", "Reporting Tools", "Communication Platforms"],
            deliveryTime: "Project-based",
            startingPrice: "KES 60,000/month",
            image: "/api/placeholder/400/250"
        },
        {
            id: 9,
            title: "Expert Witness Services",
            category: "consulting",
            icon: "⚖️",
            description: "Professional testimony and technical support for legal proceedings.",
            features: [
                "Boundary Dispute Resolution",
                "Technical Documentation",
                "Court Testimony",
                "Evidence Preparation",
                "Case Analysis"
            ],
            technologies: ["Forensic Analysis", "Document Management", "Presentation Tools"],
            deliveryTime: "Case-dependent",
            startingPrice: "KES 25,000",
            image: "/api/placeholder/400/250"
        }
    ];

    const filteredServices = activeCategory === 'all'
        ? allServices
        : allServices.filter(service => service.category === activeCategory);

    const processSteps = [
        {
            step: 1,
            title: "Consultation",
            description: "Initial discussion to understand your project requirements and objectives",
            icon: "💬"
        },
        {
            step: 2,
            title: "Site Assessment",
            description: "Comprehensive evaluation of the project site and data collection",
            icon: "🔍"
        },
        {
            step: 3,
            title: "Planning & Proposal",
            description: "Detailed project planning with timeline and cost estimation",
            icon: "📝"
        },
        {
            step: 4,
            title: "Execution",
            description: "Professional implementation using advanced technology and methodologies",
            icon: "⚡"
        },
        {
            step: 5,
            title: "Delivery & Support",
            description: "Final deliverables with ongoing support and documentation",
            icon: "✅"
        }
    ];

    const technologies = [
        {
            category: "Surveying Equipment",
            items: [
                { name: "GPS Rovers", description: "High-precision satellite positioning" },
                { name: "Total Stations", description: "Advanced angle and distance measurement" },
                { name: "3D Laser Scanners", description: "Detailed spatial data capture" },
                { name: "Drones/UAVs", description: "Aerial surveying and mapping" }
            ]
        },
        {
            category: "Software & Analysis",
            items: [
                { name: "AutoCAD Civil 3D", description: "Civil engineering design and documentation" },
                { name: "ArcGIS Suite", description: "Comprehensive GIS analysis and mapping" },
                { name: "Revit", description: "Building information modeling" },
                { name: "QGIS", description: "Open-source geographic analysis" }
            ]
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive surveying, mapping, and planning solutions tailored for East Africa's
                        unique landscape. Precision, innovation, and reliability in every project.
                    </p>
                </div>
            </section>

            {/* Service Categories Navigation */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {serviceCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="h-48 bg-gradient-to-br from-emerald-500 to-green-400 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {service.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 text-4xl opacity-90">
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <span>⏱️</span>
                                            <span>{service.deliveryTime}</span>
                                        </div>
                                        <div className="font-semibold text-emerald-600">
                                            {service.startingPrice}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {service.features.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                +{service.features.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                            Our Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A structured approach ensuring quality, accuracy, and client satisfaction at every stage.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200 hidden lg:block"></div>

                        <div className="space-y-12 lg:space-y-0">
                            {processSteps.map((step, index) => (
                                <div
                                    key={step.step}
                                    className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg">
                                                    {step.step}
                                                </div>
                                                <div className="text-2xl">{step.icon}</div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step indicator */}
                                    <div className="lg:w-1/2 flex justify-center lg:justify-center relative">
                                        <div className="w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                                    </div>

                                    {/* Spacer for alternating sides */}
                                    <div className="lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                            Advanced Technology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Utilizing cutting-edge equipment and software to deliver precise, reliable results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {technologies.map((techCategory, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                                    {techCategory.category}
                                </h3>
                                <div className="space-y-4">
                                    {techCategory.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors duration-300"
                                        >
                                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 flex-shrink-0">
                                                <span className="text-lg">⚡</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">
                                                    {item.name}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Applications */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                            Industry Applications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Serving diverse sectors across East Africa with specialized surveying and planning solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "🏠", title: "Real Estate", description: "Property development and land subdivision" },
                            { icon: "🛣️", title: "Infrastructure", description: "Roads, utilities, and public works" },
                            { icon: "🌾", title: "Agriculture", description: "Land use planning and irrigation systems" },
                            { icon: "⚡", title: "Energy", description: "Renewable energy site planning" },
                            { icon: "🏭", title: "Industrial", description: "Factory sites and industrial parks" },
                            { icon: "🎯", title: "Government", description: "Public projects and urban planning" },
                            { icon: "🏥", title: "Healthcare", description: "Hospital and facility planning" },
                            { icon: "🎓", title: "Education", description: "Campus planning and development" }
                        ].map((industry, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-emerald-50 transition-all duration-300 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{industry.title}</h3>
                                <p className="text-gray-600 text-sm">{industry.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6 font-poppins">
                        Ready to Discuss Your Project?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Get a personalized quote and professional consultation for your specific surveying or planning needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Get Free Quote
                        </a>
                        <a
                            href="https://wa.me/254718296465"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300"
                        >
                            💬 WhatsApp Consultation
                        </a>
                    </div>
                    <p className="text-emerald-200 mt-4 text-sm">
                        All consultations include preliminary assessment and project scope discussion
                    </p>
                </div>
            </section>

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="h-64 bg-gradient-to-br from-emerald-500 to-green-400 relative">
                                <div className="absolute bottom-4 left-6">
                                    <span className="bg-white/90 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {selectedService.category}
                                    </span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
                                    {selectedService.icon}
                                </div>
                            </div>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {selectedService.title}
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    {selectedService.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                                        <ul className="space-y-2">
                                            {selectedService.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <span className="text-emerald-500 mr-3">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Delivery Time:</span>
                                                <span className="font-semibold">{selectedService.deliveryTime}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Starting Price:</span>
                                                <span className="font-semibold text-emerald-600">{selectedService.startingPrice}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Technologies:</span>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {selectedService.technologies.map((tech, index) => (
                                                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/contact"
                                        className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-emerald-700 transition-colors"
                                    >
                                        Request This Service
                                    </a>
                                    <a
                                        href="https://wa.me/254718296465"
                                        className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-emerald-600 hover:text-white transition-colors"
                                    >
                                        WhatsApp Inquiry
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesPage;