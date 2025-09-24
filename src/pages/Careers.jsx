import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiLocationMarker, 
  HiArrowRight,
  HiMail,
  HiUserGroup,
  HiGlobeAlt,
  HiSparkles,
  HiCloud,
  HiCog,
  HiChartBar,
  HiShieldCheck,
  HiOfficeBuilding,
  HiCurrencyDollar,
  HiHeart
} from 'react-icons/hi';
import Button from '../components/common/button';
import useWindowSize from '../hooks/useWindowSize';
import ScrollToTop from '../components/ui/ScrollToTop';

/**
 * Careers Component - Current Job Openings
 * Following the uniform layout structure and styling patterns from other pages
 */
export default function Careers() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    checkDevice();
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
  }, []);

  // Animation props
  const bannerFadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  };

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Infrastructure Architect",
      location: "Remote (Global)",
      type: "Full-time",
      icon: HiSparkles,
      color: "text-blue-400",
      overview: "Lead the design and implementation of scalable, high-performance AI and HPC infrastructure for enterprise clients. You'll assess existing systems, develop tailored blueprints, and ensure architectures support advanced AI workloads, from model training to real-time inference.",
      responsibilities: [
        "Conduct comprehensive infrastructure assessments for AI readiness",
        "Architect solutions optimizing for speed, security, and scalability",
        "Collaborate with cross-functional teams to integrate AI pipelines"
      ],
      qualifications: [
        "8+ years in IT infrastructure or cloud architecture",
        "Expertise in AI/HPC frameworks (e.g., TensorFlow, PyTorch) and cloud platforms (AWS, Azure, GCP)",
        "Strong knowledge of Kubernetes, containerization, and distributed computing"
      ],
      impact: "Shape the backbone of AI-driven enterprises and work on cutting-edge projects with global impact.",
      applicationInstructions: "Submit your resume and portfolio to careers@compuzign.com"
    },
    {
      id: 2,
      title: "Cloud-Native Application Modernization Consultant",
      location: "New York, NY or Bangalore, India (Hybrid)",
      type: "Full-time",
      icon: HiCloud,
      color: "text-green-400",
      overview: "Transform legacy systems into agile, cloud-native architectures. You'll drive application modernization projects, leveraging microservices, containerization, and orchestration to enhance performance and scalability.",
      responsibilities: [
        "Refactor legacy code and migrate applications to cloud-native environments",
        "Implement microservices and orchestrate with Kubernetes",
        "Optimize CI/CD pipelines for faster deployments and reduced technical debt"
      ],
      qualifications: [
        "5+ years in application development or modernization",
        "Proficiency in Docker, Kubernetes, and cloud platforms (e.g., AWS, Azure)",
        "Experience with DevOps tools (e.g., Jenkins, GitLab)"
      ],
      impact: "Accelerate innovation for Fortune 500 clients and lead the evolution of enterprise applications.",
      applicationInstructions: "Send your resume to careers@compuzign.com"
    },
    {
      id: 3,
      title: "Automation Solutions Engineer",
      location: "London, UK or Remote (EMEA)",
      type: "Full-time",
      icon: HiCog,
      color: "text-purple-400",
      overview: "Design and deploy intelligent automation solutions to streamline IT and business processes. You'll use RPA, low-code platforms, and API integrations to drive efficiency and scalability for global clients.",
      responsibilities: [
        "Analyze workflows and identify automation opportunities",
        "Implement RPA tools (e.g., UiPath, Automation Anywhere) and custom scripts",
        "Measure and report KPIs to ensure automation aligns with business goals"
      ],
      qualifications: [
        "4+ years in automation, software development, or process engineering",
        "Expertise in RPA platforms, Python, and API development",
        "Strong analytical skills and experience with process optimization"
      ],
      impact: "Revolutionize operations for industry leaders and unlock new levels of efficiency.",
      applicationInstructions: "Email your resume and automation project examples to careers@compuzign.com"
    },
    {
      id: 4,
      title: "IT Cost Optimization Strategist",
      location: "San Francisco, CA or Singapore (Hybrid)",
      type: "Full-time",
      icon: HiCurrencyDollar,
      color: "text-yellow-400",
      overview: "Lead cost optimization initiatives to maximize ROI across IT budgets. You'll analyze cloud spend, licensing, and vendor contracts to deliver sustainable savings while enhancing infrastructure value.",
      responsibilities: [
        "Conduct deep-dive analyses of IT expenditures and cloud resource utilization",
        "Develop cost-saving strategies, including rightsizing and contract renegotiation",
        "Present data-driven recommendations to C-level stakeholders"
      ],
      qualifications: [
        "6+ years in IT financial management or consulting",
        "Expertise in cloud cost management tools (e.g., CloudHealth, AWS Cost Explorer)",
        "Strong negotiation skills and experience with vendor management"
      ],
      impact: "Transform IT budgets into strategic assets for global enterprises.",
      applicationInstructions: "Submit your resume and case studies to careers@compuzign.com"
    },
    {
      id: 5,
      title: "Data-Driven Strategy Consultant (Healthcare Focus)",
      location: "Boston, MA or Remote (North America)",
      type: "Full-time",
      icon: HiHeart,
      color: "text-red-400",
      overview: "Partner with healthcare organizations to deliver data-driven strategies that optimize operations and enhance patient outcomes. You'll leverage analytics, AI, and industry expertise to navigate regulatory challenges and drive innovation.",
      responsibilities: [
        "Develop data-driven strategies for healthcare transformation",
        "Implement analytics solutions for operational and clinical insights",
        "Collaborate with stakeholders to align solutions with regulatory and business goals"
      ],
      qualifications: [
        "5+ years in management consulting, preferably in healthcare or life sciences",
        "Proficiency in data analytics tools (e.g., Tableau, Power BI) and AI applications",
        "Knowledge of healthcare regulations (e.g., HIPAA, GDPR)"
      ],
      impact: "Make a meaningful impact on healthcare delivery while working with cutting-edge technologies.",
      applicationInstructions: "Send your resume and relevant project summaries to careers@compuzign.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <ScrollToTop />
      
      {/* HERO BANNER SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden z-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-bgYellow/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30">
          <div className="text-center">
            <motion.div className="space-y-10" {...bannerFadeInUp}>
              
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-bgYellow/15 to-primary-bgYellow/10 border border-primary-bgYellow/30 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <HiUserGroup className="w-5 h-5 text-primary-bgYellow mr-3" />
                <span className="text-sm font-semibold text-primary-bgYellow uppercase tracking-wider">
                  Join Our Team
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <span className="block text-white mb-2">Current</span>
                  <span className="block text-primary-bgYellow mb-2 relative">
                    Openings
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-bgYellow/60 to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Subheading */}
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <span className="text-primary-bgYellow font-semibold">Shape the future of enterprise technology</span> - Join CompuZign's global team of experts and make a meaningful impact on organizations worldwide
              </motion.p>

              {/* Enhanced Stats Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <div className="group text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-primary-bgYellow/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-bold text-primary-bgYellow mb-3 group-hover:scale-110 transition-transform duration-300">120+</div>
                  <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">Global Talent Network</div>
                </div>
                <div className="group text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-primary-bgYellow/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-bold text-primary-bgYellow mb-3 group-hover:scale-110 transition-transform duration-300">25</div>
                  <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">Years of Excellence</div>
                </div>
                <div className="group text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-primary-bgYellow/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-bold text-primary-bgYellow mb-3 group-hover:scale-110 transition-transform duration-300">3</div>
                  <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">Countries</div>
                </div>
                <div className="group text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-primary-bgYellow/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-bold text-primary-bgYellow mb-3 group-hover:scale-110 transition-transform duration-300">250+</div>
                  <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">Expert Employees</div>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* JOB OPENINGS SECTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-bgYellow/20 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-bgYellow/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Open <span className="text-primary-bgYellow">Positions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exciting career opportunities with CompuZign and become part of our mission to transform enterprise technology
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            {...staggerChildren}
          >
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={job.id}
                className="group relative"
                {...fadeInUp}
                whileHover={{ y: -2 }}
              >
                <Link 
                  to={`/careers/${job.id}`}
                  className="block bg-white/5 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6 hover:border-primary-bgYellow/50 hover:bg-white/8 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Company Logo Placeholder */}
                      <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <job.icon className={`w-6 h-6 ${job.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        {/* Job Title */}
                        <h3 className="text-lg font-semibold text-primary-bgYellow mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                          {job.title}
                        </h3>
                        
                        {/* Company Name */}
                        <p className="text-gray-400 text-sm mb-2">CompuZign</p>
                        
                        {/* Location */}
                        <div className="flex items-center text-gray-400 text-sm">
                          <HiLocationMarker className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-bgYellow/5 via-transparent to-blue-500/5"></div>
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div 
            className="text-center space-y-8"
            {...fadeInUp}
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Ready to <span className="text-primary-bgYellow">Make an Impact?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join CompuZign and become part of a team that's shaping the future of enterprise technology. 
                Send your resume and relevant project examples to start your journey with us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center space-x-3 text-primary-bgYellow">
                <HiMail className="w-6 h-6" />
                <span className="text-lg font-semibold">careers@compuzign.com</span>
              </div>
              
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                Contact HR Team
                <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Simplified Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
              <div className="group text-center bg-blue-500/8 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <HiGlobeAlt className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Global Opportunities</h4>
                <p className="text-gray-300 leading-relaxed text-sm">Remote and hybrid positions available worldwide with flexible work arrangements</p>
              </div>
              
              <div className="group text-center bg-primary-bgYellow/8 rounded-2xl p-6 border border-primary-bgYellow/20 hover:border-primary-bgYellow/40 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-primary-bgYellow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-bgYellow/30 transition-colors duration-300">
                  <HiUserGroup className="w-7 h-7 text-primary-bgYellow" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-bgYellow transition-colors duration-300">Collaborative Culture</h4>
                <p className="text-gray-300 leading-relaxed text-sm">Work with industry experts and thought leaders in an innovative environment</p>
              </div>
              
              <div className="group text-center bg-purple-500/8 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <HiSparkles className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Cutting-Edge Projects</h4>
                <p className="text-gray-300 leading-relaxed text-sm">Shape the future with innovative technology solutions and breakthrough initiatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 