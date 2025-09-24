import ComprehensiveMigrationSolutionsIcon1 from "../assets/Comprehensive-Migration-icon-1.png";
import ComprehensiveMigrationSolutionsIcon2 from "../assets/Comprehensive-Migration-icon-2.png";
import ComprehensiveMigrationSolutionsIcon3 from "../assets/Comprehensive-Migration-icon-3.png";
import ComprehensiveMigrationFrame1 from "../assets/Comprehensive-Migration-Frame-1.png";
import ComprehensiveMigrationFrame2 from "../assets/Comprehensive-Migration-Frame-2.png";
import ComprehensiveMigrationFrame3 from "../assets/Comprehensive-Migration-Frame-3.png";
import EmpoweringGlobalSuccessIcon1 from "../assets/Empowering-Global-Success-Icon-1.png";
import EmpoweringGlobalSuccessIcon2 from "../assets/Empowering-Global-Success-Icon-2.png";
import EmpoweringGlobalSuccessIcon3 from "../assets/Empowering-Global-Success-Icon-3.png";
import EmpoweringGlobalSuccessIcon4 from "../assets/Empowering-Global-Success-Icon-4.png";
import EmpoweringGlobalSuccessFrame1 from "../assets/Empowering-Global-Success-Frame-1.png";
import EmpoweringGlobalSuccessFrame2 from "../assets/Empowering-Global-Success-Frame-2.png";
import EmpoweringGlobalSuccessFrame3 from "../assets/Empowering-Global-Success-Frame-3.png";
import EmpoweringGlobalSuccessFrame4 from "../assets/Empowering-Global-Success-Frame-4.png";
import NavigateTechnologyBanner from "../assets/Navigate-Technology-banner.png";
import ExpertiseSolutions1 from "../assets/Expertise-Solutions-1.png";
import ExpertiseSolutions2 from "../assets/Expertise-Solutions-2.png";
import ProvenIndustryExperienceFrame1 from "../assets/Proven-Industry-Experience-frame-1.png";
import ProvenIndustryExperienceFrame2 from "../assets/Proven-Industry-Experience-frame-2.png";
import InnovatingWithAIBanner from "../assets/Innovating-with-AI-banner.png";
import InnovatingWithAI from "../assets/Innovating-with-AI.png";

import HeroBanner from "../components/ui/HeroBanner";
import TestimonialsCarousel from "../components/ui/TestimonialsCarousel";
import ClientLogos from "../components/ui/ClientLogos";
import CallToAction from "../components/ui/CallToAction";
import Cards from "../components/ui/cards";
import SliderCarousel from "../components/ui/carousel";
import useWindowSize from "../hooks/useWindowSize";
import Cards2 from "../components/ui/cards2";

export default function Home() {
    const { width } = useWindowSize();
    const ComprehensiveMigrationSolutionsContainer = [
        {
            header: "Streamlined Data Center Migration",
            content: "Migrating your data center is essential for optimizing IT infrastructure. Our proven methods enable rapid, efficient data transfers with minimal downtime, ensuring business continuity. We assess your systems and strategically plan the migration, so you can focus on what matters most—your business.",
            icon: ComprehensiveMigrationSolutionsIcon1,
            hoverImage: ComprehensiveMigrationFrame1,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },
        {
            header: "Tailored Cloud Migration Services",
            content: "Transitioning to the cloud unlocks new levels of agility and scalability. CompuZign's cloud migration services are customized to meet your needs, ensuring a seamless transition that maximizes cloud potential. Whether moving to AWS, Microsoft Azure, or Google Cloud, our experts guide you through every phase.",
            icon: ComprehensiveMigrationSolutionsIcon2,
            hoverImage: ComprehensiveMigrationFrame2,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },
        {
            header: "Optimizing Infrastructure Assessments",
            content: "Understanding the strengths and weaknesses of your current IT setup is crucial for strategic growth. Our in-depth infrastructure assessments provide actionable insights, identifying areas for improvement and laying the groundwork for a robust IT strategy that aligns with your business goals.",
            icon: ComprehensiveMigrationSolutionsIcon3,
            hoverImage: ComprehensiveMigrationFrame3,
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '12px',
            paddingRight: '12px',
            width: '340px',
            height: '340px'
        },

    ]
    const EmpoweringGlobalSuccessContent = [
        {
            header: "25 Years of Trusted Service",
            content: "",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: EmpoweringGlobalSuccessFrame1,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "120+ Globally Talent Network",
            content: "",
            icon: EmpoweringGlobalSuccessIcon2,
            hoverImage: EmpoweringGlobalSuccessFrame2,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "3 Countries of Operations",
            content: "",
            icon: EmpoweringGlobalSuccessIcon3,
            hoverImage: EmpoweringGlobalSuccessFrame3,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
        {
            header: "50+ Expert Employees",
            content: "",
            icon: EmpoweringGlobalSuccessIcon4,
            hoverImage: EmpoweringGlobalSuccessFrame4,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '270px',
            height: '180px'
        },
    ]

    const EnterpriseLevelConsulting = [
        {
            header: "Maximizing IT Investments",
            content: "Every business seeks to get the most out of its IT infrastructure. At CompuZign, we offer enterprise-level consulting that drives significant value. Our team works closely with you to assess your existing operations, identify gaps, and develop a strategic roadmap that enhances performance, reduces costs, and accelerates service delivery.",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: ProvenIndustryExperienceFrame1,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '570px',
            height: '395px'
        },
        {
            header: "Proven Industry Experience",
            content: "With a strong track record of success, CompuZign has been recognized among the fastest-growing businesses in Dallas. Our approach is centered on delivering measurable results that align with your organizational objectives. We combine industry expertise with tailored strategies to drive growth and maximize your IT investments.",
            icon: EmpoweringGlobalSuccessIcon1,
            hoverImage: ProvenIndustryExperienceFrame2,
            paddingTop: '30px',
            paddingBottom: '12px',
            paddingLeft: '18px',
            paddingRight: '18px',
            width: '570px',
            height: '395px'
        },
    ]

    const ProvenIndustryExperience = [
        {
            title: "Expertise in Technology Solutions for the Financial Services industry",
            description: "CompuZign brings deep expertise in technology solutions tailored specifically for financial services organizations worldwide. We understand the unique challenges, regulatory requirements, and operational complexities that define this industry, enabling us to deliver targeted solutions that drive efficiency, compliance, and growth.",
            image: ProvenIndustryExperienceFrame1,
        },
        {
            title: "Deep Expertise in Manufacturing and Industrial Organizations",
            description: "CompuZign has extensive experience serving manufacturing and industrial organizations across the globe. We understand the unique operational challenges, technology requirements, and efficiency demands that define this sector. Our specialized solutions are designed to optimize processes, enhance productivity, and drive digital transformation in manufacturing environments.",
            image: ProvenIndustryExperienceFrame2,
        },
    ];

    const EmpoweringGlobalSuccess = [
        {
            title: "CompuZign Operations Center (COC)",
            description: "Our 24/7 Operations Center provides round-the-clock monitoring, support, and management services. With dedicated teams across multiple time zones, we ensure continuous availability and rapid response to maintain your business operations at peak performance.",
            icon: EmpoweringGlobalSuccessIcon1,
            image: EmpoweringGlobalSuccessFrame1,
        },
        {
            title: "Global Network Operations Center",
            description: "Our strategically located Network Operations Centers provide comprehensive infrastructure monitoring and management services worldwide. With state-of-the-art facilities and expert teams, we deliver proactive network management, ensuring optimal performance and minimal downtime for your critical business operations.",
            icon: EmpoweringGlobalSuccessIcon2,
            image: EmpoweringGlobalSuccessFrame2,
        },
        {
            title: "24/7 Support Coverage",
            description: "Round-the-clock technical support across all time zones, ensuring your business operations never skip a beat. Our global support teams provide immediate assistance, proactive monitoring, and rapid issue resolution to maintain business continuity.",
            icon: EmpoweringGlobalSuccessIcon3,
            image: EmpoweringGlobalSuccessFrame3,
        },
        {
            title: "Multi-language Support",
            description: "Comprehensive support services available in multiple languages to serve our diverse global clientele. Our multilingual support teams ensure clear communication and effective problem resolution regardless of geographical location or language preferences.",
            icon: EmpoweringGlobalSuccessIcon4,
            image: EmpoweringGlobalSuccessFrame4,
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Banner */}
            <HeroBanner />
            <div className="relative bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-primary-bgLightBlack w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Optimized Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Reduced to 2 key lines */}
                    <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-15"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow to-transparent opacity-15"></div>

                    {/* Reduced particles */}
                    <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-primary-bgYellow rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Simplified circuit pattern */}
                    <div className="absolute inset-0 opacity-3">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <pattern id="sectionCircuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#sectionCircuit)" className="text-primary-bgYellow"/>
                        </svg>
                    </div>
                </div>

                {/* Content with enhanced styling */}
                <div className="relative z-10 w-full">
                    <h2 className="text-primary-textWhite my-8 text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-lg">
                        Empowering Global Success Through Expert IT Solutions
                    </h2>
                    <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4 py-8">
                        {EmpoweringGlobalSuccessContent.map((item, index) => (
                            <Cards key={index} data={item} />
                        ))}
                    </div>
                </div>

                {/* Enhanced bottom gradient */}
                <div className="h-16 w-full absolute bottom-0 bg-gradient-to-t from-primary-bgLight via-primary-bgLight/80 to-transparent z-1"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full px-4 pt-24 pb-8 md:px-8 lg:px-16">
                <img
                    src={NavigateTechnologyBanner}
                    className="w-full lg:w-1/2 object-cover max-h-[500px]"
                    alt="Technology landscape"
                />
                <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px]">
                    <p className="text-2xl md:text-3xl font-medium text-primary uppercase">Introduction</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        Navigate the Technology Landscape with Confidence
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        At CompuZign, we empower businesses to thrive in an ever-evolving technological landscape. Our team of seasoned IT professionals offers innovative, cost-effective solutions tailored to your unique needs. We specialize in IT consulting, project services, and flexible staffing solutions, all designed to enhance your operational efficiency and drive growth.
                    </p>
                </div>
            </div>
            <div className="relative bg-gradient-to-br from-primary-bgLightBlack via-slate-800 to-primary-bgLightBlack w-full flex flex-col items-center justify-center pb-24 overflow-hidden">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Diagonal flowing lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20 transform rotate-12"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-20 transform -rotate-12"></div>
                    
                    {/* Tech nodes */}
                    <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-bgYellow rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    
                    {/* Migration pathway pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <pattern id="migrationPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <path d="M30 10 L50 30 L30 50 L10 30 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                                    <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#migrationPattern)" className="text-blue-400"/>
                        </svg>
                    </div>
                    
                    {/* Data flow arrows */}
                    <div className="absolute top-1/3 right-10 text-primary-bgYellow opacity-30">
                        <svg width="40" height="20" viewBox="0 0 40 20">
                            <path d="M5 10 L35 10 M30 5 L35 10 L30 15" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/3 left-10 text-blue-400 opacity-30">
                        <svg width="40" height="20" viewBox="0 0 40 20">
                            <path d="M35 10 L5 10 M10 5 L5 10 L10 15" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                    <h2 className="text-primary-textWhite my-8 text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-lg">
                        Comprehensive Migration Solutions
                    </h2>
                    <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4 py-8">
                        {ComprehensiveMigrationSolutionsContainer.map((item, index) => (
                            <Cards key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
                {/* Creative Background Elements */}
                <div className="absolute inset-0">
                    {/* Geometric Shapes */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/15 rounded-full blur-2xl"></div>
                    
                    {/* Subtle Tech Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
                        <defs>
                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffda17" stopOpacity="0.3"/>
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2"/>
                                <stop offset="100%" stopColor="#ffda17" stopOpacity="0.1"/>
                            </linearGradient>
                        </defs>
                        <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none"/>
                        <path d="M0,400 Q250,350 500,400 T1000,400" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none"/>
                        <path d="M0,600 Q250,550 500,600 T1000,600" stroke="url(#line-gradient)" strokeWidth="1" fill="none"/>
                    </svg>
                    
                    {/* Floating Dots */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/20 rounded-full"
                            style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animation: `gentleFloat ${4 + Math.random() * 2}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 w-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pt-12 text-center text-gray-800">
                        Expertise Solutions
                    </h2>
                    
                    {/* First Section - RaaS */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full px-4 pt-8 pb-6 md:px-8 lg:px-16">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src={ExpertiseSolutions1}
                                className="relative w-full lg:w-[380px] object-cover max-h-[350px] rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                                alt="Technology landscape"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px]">
                            <div className="relative">
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-yellow-400 text-white rounded-full text-sm font-semibold mb-3 shadow-md">
                                    Resource-as-a-Service (RaaS)
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800">
                                Flexible Talent Solutions for IT Demands
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                In today's fast-paced environment, accessing top-tier IT talent on demand is essential. Our RaaS staffing solutions connect you with highly skilled professionals who meet your project needs—whether it's for short-term engagements or long-term initiatives. This flexibility enables you to scale your operations without the overhead costs associated with traditional hiring.
                            </p>
                            
                            {/* Feature Points */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['Scalable Teams', 'Expert Professionals', 'Cost Effective'].map((feature, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Creative Divider */}
                    <div className="w-full flex justify-center py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            <div className="w-24 h-px bg-gradient-to-r from-primary via-blue-400 to-primary"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </div>
                    </div>
                    
                    {/* Second Section - Cyber Security */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full px-4 pt-6 pb-12 md:px-8 lg:px-16">
                        <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:max-w-[600px] order-2 lg:order-1">
                            <div className="relative">
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm font-semibold mb-3 shadow-md">
                                    Cyber Security
                                </div>
                            </div>
                            <h3 className="text-xl lg:text-3xl font-bold leading-tight text-gray-800">
                                Cyber Resilience and Incident Response
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                Amid evolving threats, our Cyber Resilience and Incident Response (IRR) services ensure your IT infrastructure withstands disruptions and recovers swiftly. We focus on proactive risk assessments and rapid recovery to minimize downtime and data loss. Our team continuously monitors for potential threats, enabling quick response and mitigation to protect critical assets. With customized recovery plans, we help you maintain business continuity and enhance resilience against future incidents.
                            </p>
                            
                            {/* Feature Points */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['24/7 Monitoring', 'Rapid Response', 'Risk Assessment'].map((feature, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative group order-1 lg:order-2">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src={ExpertiseSolutions2}
                                className="relative w-full lg:w-[380px] object-cover max-h-[350px] rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                                alt="Cyber Security"
                            />
                            
                            {/* Floating Security Badge */}
                            <div className="absolute -top-2 -left-2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z" clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-gradient-to-br from-primary-bgLightBlack via-gray-900 to-slate-900 w-full flex flex-col items-center justify-center pb-24 overflow-hidden">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Enterprise network grid */}
                    <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow to-transparent opacity-20"></div>
                    <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-15"></div>
                    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow to-transparent opacity-20"></div>
                    
                    {/* Consulting nodes */}
                    <div className="absolute top-16 right-16 w-3 h-3 border-2 border-primary-bgYellow rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-3 h-3 border-2 border-green-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s' }}></div>
                    
                    {/* Enterprise pattern */}
                    <div className="absolute inset-0 opacity-4">
                        <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <pattern id="enterprisePattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <rect x="35" y="35" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
                                    <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.2"/>
                                    <path d="M20 40 L60 40 M40 20 L40 60" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#enterprisePattern)" className="text-primary-bgYellow"/>
                        </svg>
                    </div>
                    
                    {/* Consulting connection lines */}
                    <div className="absolute top-1/4 left-1/4 text-green-400 opacity-25">
                        <svg width="60" height="60" viewBox="0 0 60 60">
                            <path d="M10 30 Q30 10 50 30 Q30 50 10 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="30" cy="30" r="3" fill="currentColor"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 text-primary-bgYellow opacity-25">
                        <svg width="60" height="60" viewBox="0 0 60 60">
                            <path d="M50 30 Q30 10 10 30 Q30 50 50 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="30" cy="30" r="3" fill="currentColor"/>
                        </svg>
                    </div>
                    
                    {/* Strategic indicators */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-primary-bgYellow opacity-20">
                        <svg width="30" height="30" viewBox="0 0 30 30">
                            <polygon points="15,5 25,20 5,20" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="15" cy="15" r="2" fill="currentColor"/>
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                    <h2 className="text-primary-textWhite my-8 text-2xl lg:text-3xl font-bold text-center px-4 drop-shadow-lg">
                        Enterprise-Level Consulting
                    </h2>
                    <div className="flex flex-row gap-4 cursor-pointer flex-wrap w-full justify-center items-center px-4 py-8">
                        {EnterpriseLevelConsulting.map((item, index) => (
                            <Cards key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Client Success Stories */}
            <TestimonialsCarousel />
            
            {/* Client Logos */}
            <ClientLogos />
            
            {/* Call to Action */}
            <CallToAction />
        </div>
    );
}