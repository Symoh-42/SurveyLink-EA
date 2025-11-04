// pages/ProjectsPage.jsx
import React, { useState } from 'react';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const projectFilters = [
        { id: 'all', name: 'All Projects', count: 12 },
        { id: 'surveying', name: 'Land Surveying', count: 5 },
        { id: 'gis', name: 'GIS & Mapping', count: 4 },
        { id: 'planning', name: 'Urban Planning', count: 3 },
        { id: 'infrastructure', name: 'Infrastructure', count: 4 },
        { id: 'commercial', name: 'Commercial', count: 3 }
    ];

    const allProjects = [
        {
            id: 1,
            title: "Nairobi Metro Expansion Survey",
            category: "surveying",
            client: "Nairobi Metropolitan Services",
            location: "Nairobi County",
            year: "2023",
            duration: "6 months",
            budget: "KES 8.5M",
            description: "Comprehensive boundary surveying and topographic mapping for Nairobi's metropolitan expansion project covering 500+ hectares.",
            challenge: "Complex urban environment with existing infrastructure and legal boundary disputes.",
            solution: "Implemented drone surveying combined with GPS technology to create accurate digital maps and resolve 15+ boundary conflicts.",
            results: [
                "500+ hectares accurately mapped",
                "15 boundary disputes resolved",
                "30% faster data collection using drones",
                "Client savings of KES 2M in potential legal costs"
            ],
            technologies: ["Drone Surveying", "GPS Rovers", "AutoCAD Civil 3D", "GIS Integration"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "completed",
            featured: true
        },
        {
            id: 2,
            title: "Mombasa Coastal Infrastructure Mapping",
            category: "gis",
            client: "Coastal Development Authority",
            location: "Mombasa Coast",
            year: "2023",
            duration: "4 months",
            budget: "KES 6.2M",
            description: "GIS mapping and spatial analysis for coastal infrastructure development and environmental impact assessment.",
            challenge: "Coastal erosion threats and complex tidal patterns affecting infrastructure planning.",
            solution: "Developed dynamic GIS models incorporating tidal data and erosion patterns for sustainable planning.",
            results: [
                "200km coastline mapped",
                "Erosion risk zones identified",
                "Infrastructure optimized for climate resilience",
                "Environmental compliance achieved"
            ],
            technologies: ["ArcGIS Pro", "Remote Sensing", "3D Modeling", "Environmental Analysis"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "completed",
            featured: true
        },
        {
            id: 3,
            title: "Rift Valley Agricultural Land Parcelization",
            category: "surveying",
            client: "Agricultural Development Corporation",
            location: "Rift Valley",
            year: "2023",
            duration: "3 months",
            budget: "KES 4.8M",
            description: "Large-scale land parcelization and surveying for agricultural optimization across 2,000 hectares.",
            challenge: "Irregular terrain and existing informal land allocations requiring formalization.",
            solution: "Systematic boundary establishment with community engagement and digital land records.",
            results: [
                "2,000 hectares parcelized",
                "500+ land parcels created",
                "Digital land registry established",
                "Community conflicts reduced by 80%"
            ],
            technologies: ["GPS Surveying", "Digital Mapping", "Community GIS", "Land Management Software"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "completed",
            featured: false
        },
        {
            id: 4,
            title: "Kisumu Urban Master Plan",
            category: "planning",
            client: "Kisumu City Council",
            location: "Kisumu",
            year: "2024",
            duration: "8 months",
            budget: "KES 12M",
            description: "Comprehensive urban master planning for sustainable city growth and infrastructure development.",
            challenge: "Rapid urbanization with inadequate infrastructure and environmental concerns.",
            solution: "Integrated planning approach combining spatial analysis, stakeholder engagement, and sustainable design.",
            results: [
                "20-year development framework",
                "Zoning regulations updated",
                "Transportation network optimized",
                "Green spaces increased by 25%"
            ],
            technologies: ["Urban Planning Software", "Traffic Analysis", "Environmental Assessment", "Stakeholder GIS"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "in-progress",
            featured: true
        },
        {
            id: 5,
            title: "Thika Highway Infrastructure Survey",
            category: "infrastructure",
            client: "Kenya National Highways Authority",
            location: "Thika",
            year: "2023",
            duration: "5 months",
            budget: "KES 7.5M",
            description: "Precision surveying and mapping for highway expansion and interchange development.",
            challenge: "Minimizing disruption to existing traffic flow during data collection.",
            solution: "Night-time surveying operations and advanced GPS technology for efficient data capture.",
            results: [
                "50km highway accurately mapped",
                "Construction timeline reduced by 20%",
                "Zero traffic accidents during survey",
                "Cost savings of KES 1.5M through optimized routing"
            ],
            technologies: ["Robotic Total Stations", "GPS Technology", "CAD Design", "Construction Staking"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "completed",
            featured: false
        },
        {
            id: 6,
            title: "Nakuru Industrial Park Planning",
            category: "commercial",
            client: "Nakuru County Government",
            location: "Nakuru",
            year: "2024",
            duration: "6 months",
            budget: "KES 9.8M",
            description: "Site planning and infrastructure design for 500-acre industrial park development.",
            challenge: "Complex terrain with varying soil conditions and utility integration requirements.",
            solution: "Comprehensive geotechnical analysis and phased development planning.",
            results: [
                "500-acre site optimized",
                "Infrastructure costs reduced by 15%",
                "Environmental compliance achieved",
                "50+ potential investors attracted"
            ],
            technologies: ["Site Planning Software", "Geotechnical Analysis", "Utility Design", "3D Visualization"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "in-progress",
            featured: true
        },
        {
            id: 7,
            title: "Lake Victoria Environmental GIS",
            category: "gis",
            client: "Lake Basin Development Authority",
            location: "Lake Victoria Basin",
            year: "2023",
            duration: "7 months",
            budget: "KES 5.5M",
            description: "Environmental monitoring and resource management GIS for Lake Victoria basin.",
            challenge: "Data integration from multiple sources and stakeholders.",
            solution: "Unified GIS platform with real-time data sharing capabilities.",
            results: [
                "10,000km² area covered",
                "5 government agencies integrated",
                "Environmental monitoring improved",
                "Resource conflicts reduced by 60%"
            ],
            technologies: ["Web GIS", "Remote Sensing", "Data Analytics", "Mobile Data Collection"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400"
            ],
            status: "completed",
            featured: false
        },
        {
            id: 8,
            title: "Eldoret Municipal Boundary Review",
            category: "surveying",
            client: "Eldoret Municipal Council",
            location: "Eldoret",
            year: "2024",
            duration: "4 months",
            budget: "KES 3.8M",
            description: "Municipal boundary review and cadastral mapping for urban expansion planning.",
            challenge: "Historical boundary disputes and informal settlements.",
            solution: "Participatory mapping approach with community involvement and legal verification.",
            results: [
                "Municipal boundaries clarified",
                "100+ disputes resolved",
                "Informal settlements documented",
                "Revenue collection improved by 30%"
            ],
            technologies: ["Cadastral Surveying", "Community Mapping", "Legal Documentation", "Digital Archives"],
            image: "/api/placeholder/600/400",
            gallery: [
                "/api/placeholder/600/400",
                "/api/placeholder/600/400"
            ],
            status: "in-progress",
            featured: false
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    const featuredProjects = allProjects.filter(project => project.featured);
    const completedProjects = allProjects.filter(project => project.status === 'completed');
    const inProgressProjects = allProjects.filter(project => project.status === 'in-progress');

    const stats = [
        { number: completedProjects.length, label: "Projects Completed", icon: "✅" },
        { number: inProgressProjects.length, label: "Active Projects", icon: "🔄" },
        { number: "KES 58M+", label: "Total Project Value", icon: "💰" },
        { number: "15+", label: "Counties Served", icon: "🗺️" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Showcasing our expertise through successful surveying, mapping, and planning projects
                        across East Africa. Precision delivered, promises kept.
                    </p>
                </div>
            </section>

            {/* Portfolio Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-poppins">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Highlighting some of our most impactful and innovative projects across East Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-white/90 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-white/90">{project.location} • {project.year}</p>
                                    </div>
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-400 group-hover:scale-110 transition-transform duration-700"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-gray-600 mb-1">Client: {project.client}</p>
                                            <p className="text-gray-600">Duration: {project.duration}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold text-emerald-600">{project.budget}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters and View Controls */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-poppins">
                                All Projects
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Filter by category to explore our work
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {/* View Mode Toggle */}
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'grid'
                                        ? 'bg-white text-emerald-600 shadow-sm'
                                        : 'text-gray-600'
                                        }`}
                                >
                                    ▫️ Grid
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-md transition-all ${viewMode === 'list'
                                        ? 'bg-white text-emerald-600 shadow-sm'
                                        : 'text-gray-600'
                                        }`}
                                >
                                    ☰ List
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {projectFilters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span>{filter.name}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeFilter === filter.id
                                    ? 'bg-white/20 text-white'
                                    : 'bg-gray-300 text-gray-700'
                                    }`}>
                                    {filter.count}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid/List */}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onSelect={setSelectedProject}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredProjects.map((project) => (
                                <ProjectListItem
                                    key={project.id}
                                    project={project}
                                    onSelect={setSelectedProject}
                                />
                            ))}
                        </div>
                    )}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No projects found
                            </h3>
                            <p className="text-gray-600">
                                Try selecting a different filter category
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6 font-poppins">
                        Start Your Next Project
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Ready to bring precision and expertise to your next surveying or planning project?
                        Let's discuss how we can help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Start a Project
                        </a>
                        <a
                            href="https://wa.me/254718296465"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300"
                        >
                            💬 Discuss Your Project
                        </a>
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

// Project Card Component for Grid View
const ProjectCard = ({ project, onSelect }) => {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            onClick={() => onSelect(project)}
        >
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <div className="absolute top-3 left-3 z-20">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                        }`}>
                        {project.status === 'completed' ? '✅' : '🔄'}
                    </span>
                </div>
                <div className="absolute top-3 right-3 z-20">
                    <span className="bg-white/90 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                    </span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-400 group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                        <span>📍</span>
                        <span>{project.location}</span>
                    </div>
                    <span>{project.year}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 2}
                        </span>
                    )}
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

// Project List Item Component for List View
const ProjectListItem = ({ project, onSelect }) => {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
            onClick={() => onSelect(project)}
        >
            <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-48 lg:h-32 bg-gradient-to-br from-emerald-500 to-green-400 rounded-xl flex-shrink-0"></div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                                }`}>
                                {project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}
                            </span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                            <span className="text-gray-500 text-sm">{project.year}</span>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                                <span>📍</span>
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>👤</span>
                                <span>{project.client}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>⏱️</span>
                                <span>{project.duration}</span>
                            </div>
                            <div className="font-semibold text-emerald-600">
                                {project.budget}
                            </div>
                        </div>
                    </div>

                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300 flex-shrink-0">
                        View Case Study
                    </button>
                </div>
            </div>
        </div>
    );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-blue-100 text-blue-800'
                                        }`}>
                                        {project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}
                                    </span>
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {project.category}
                                    </span>
                                    <span className="text-gray-500">📍 {project.location}</span>
                                    <span className="text-gray-500">📅 {project.year}</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Project Gallery */}
                        <div className="mb-8">
                            <div className="h-96 bg-gradient-to-br from-emerald-500 to-green-400 rounded-2xl mb-4 flex items-center justify-center text-white text-6xl">
                                🗺️
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {project.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className="h-24 bg-gradient-to-br from-emerald-400 to-green-300 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                        onClick={() => setActiveImage(index)}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Project Overview */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Challenge & Solution */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <span className="text-red-500 mr-2">🎯</span>
                                            The Challenge
                                        </h4>
                                        <p className="text-gray-600">
                                            {project.challenge}
                                        </p>
                                    </div>
                                    <div className="bg-green-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <span className="text-green-500 mr-2">💡</span>
                                            Our Solution
                                        </h4>
                                        <p className="text-gray-600">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Results</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.results.map((result, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <span className="text-emerald-500 mt-1">✓</span>
                                                <span className="text-gray-600">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Project Details */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Client:</span>
                                            <span className="font-semibold">{project.client}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Duration:</span>
                                            <span className="font-semibold">{project.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Budget:</span>
                                            <span className="font-semibold text-emerald-600">{project.budget}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <span className={`font-semibold ${project.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                                                }`}>
                                                {project.status === 'completed' ? 'Completed' : 'In Progress'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies Used */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <a
                                        href="/contact"
                                        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-emerald-700 transition-colors block"
                                    >
                                        Start Similar Project
                                    </a>
                                    <a
                                        href="https://wa.me/254718296465"
                                        className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold text-center hover:bg-emerald-600 hover:text-white transition-colors block"
                                    >
                                        💬 Discuss on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;