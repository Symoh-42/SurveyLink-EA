// pages/ContactPage.jsx
import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Format message for WhatsApp
        const message = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/254718296465?text=${message}`, '_blank');
    };

    const contactMethods = [
        {
            icon: "📱",
            title: "WhatsApp",
            description: "Fastest response",
            value: "+254 718 296465",
            link: "https://wa.me/254718296465",
            buttonText: "Message Us"
        },
        {
            icon: "📧",
            title: "Email",
            description: "Detailed inquiries",
            value: "info@surveylinkea.co.ke",
            link: "mailto:info@surveylinkea.co.ke",
            buttonText: "Send Email"
        },
        {
            icon: "🏢",
            title: "Office",
            description: "Visit our office",
            value: "Nairobi, Kenya",
            link: "https://maps.google.com/?q=Nairobi,Kenya",
            buttonText: "Get Directions"
        }
    ];

    const services = [
        "Land Surveying",
        "GIS & Mapping",
        "Urban Planning",
        "Project Management",
        "Other Inquiry"
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your project? Contact us for professional surveying and planning solutions.
                        We're here to help you achieve precision in every measurement.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">{method.title}</h3>
                                <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                                <p className="text-lg font-medium text-emerald-600 mb-4">{method.value}</p>
                                <a
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300"
                                >
                                    {method.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fill out the form below and we'll get back to you within 24 hours.
                                For urgent inquiries, please use our WhatsApp number above.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                                            placeholder="+254 XXX XXX XXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Message via WhatsApp
                                </button>
                            </form>
                        </div>

                        {/* Map and Additional Info */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4 font-poppins">Why Choose SurveyLink EA?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="text-lg mr-3">✅</span>
                                        <span>15+ Years of Experience</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-lg mr-3">✅</span>
                                        <span>Modern Surveying Technology</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-lg mr-3">✅</span>
                                        <span>East Africa Regional Expertise</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-lg mr-3">✅</span>
                                        <span>Quick Response Time</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-lg mr-3">✅</span>
                                        <span>Competitive Pricing</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-6">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Office Hours</h4>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/254718296465"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>💬</span>
                                    <span>Quick WhatsApp Chat</span>
                                </a>
                                <a
                                    href="tel:+254718296465"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>📞</span>
                                    <span>Call Us Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;