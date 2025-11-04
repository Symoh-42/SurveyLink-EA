// pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
    const values = [
        {
            icon: "🎯",
            title: "Precision",
            description: "Uncompromising accuracy in every measurement and calculation."
        },
        {
            icon: "🛡️",
            title: "Reliability",
            description: "Consistent, dependable service delivery across all projects."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Embracing cutting-edge technology and methodologies."
        },
        {
            icon: "🤝",
            title: "Partnership",
            description: "Building long-term relationships based on trust and results."
        }
    ];

    const team = [
        {
            name: "John Kamau",
            role: "Lead Surveyor",
            expertise: "15+ years in land surveying",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Sarah Mwangi",
            role: "GIS Specialist",
            expertise: "Spatial data analysis expert",
            image: "/api/placeholder/200/200"
        },
        {
            name: "David Ochieng",
            role: "Urban Planner",
            expertise: "Development planning consultant",
            image: "/api/placeholder/200/200"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                                About SurveyLink EA
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                For over 15 years, SurveyLink EA has been at the forefront of surveying and planning consultancy
                                in Kenya and the wider East African region. Our commitment to precision and innovation has
                                established us as trusted partners in spatial solutions.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We combine traditional surveying expertise with modern technology to deliver comprehensive
                                solutions that shape sustainable development across East Africa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/contact"
                                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300"
                                >
                                    Contact Our Team
                                </a>
                                <a
                                    href="/projects"
                                    className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
                                >
                                    View Our Work
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-white">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🗺️</div>
                                    <h3 className="text-2xl font-bold mb-4 font-poppins">East Africa's Trusted Survey Partner</h3>
                                    <p className="text-emerald-100">
                                        Serving clients across Kenya, Tanzania, Uganda, Rwanda, and beyond with reliable spatial solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide our work and define our commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-6 group hover:transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experienced professionals dedicated to delivering exceptional surveying and planning solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{member.name}</h3>
                                <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.expertise}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide precise, reliable, and innovative surveying and planning solutions that empower
                                sustainable development across East Africa, while maintaining the highest standards of
                                professionalism and technical excellence.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-gray-50 rounded-2xl p-8">
                            <div className="text-4xl mb-4">🔭</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the leading surveying and planning consultancy in East Africa, recognized for our
                                technological innovation, environmental stewardship, and contribution to regional
                                development through spatial excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;