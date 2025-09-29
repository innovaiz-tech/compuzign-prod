import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowLeft,
  HiLocationMarker,
  HiCalendar,
  HiClock,
  HiTag,
  HiSparkles,
  HiCloud,
  HiCog,
  HiCurrencyDollar,
  HiHeart,
  HiMail,
  HiChartBar,
  HiShieldCheck,
  HiArrowRight
} from 'react-icons/hi';
import Button from '../components/common/button';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  // Job data (same as in Careers page but with additional fields)
  const jobsData = [
    {
      id: 1,
      title: "Enterprise Account Manager",
      location: "Remote but preference will be given to Latin and North Americas resources",
      type: "Full-time",
      icon: HiSparkles,
      color: "text-blue-400",
      published: "September 25, 2025",
      duration: "Permanent",
      category: "",
      jobId: "COMP-001",
      overview: "",
      language: "Fluent in English and second language, preferably Spanish",
      jobSummary: "We are seeking a highly motivated and results-driven Enterprise Account Manager to manage and grow relationships with our key enterprise clients. In this role, you will act as the main point of contact for high-value accounts, ensuring customer satisfaction, driving revenue growth, and aligning client needs with our solutions. You’ll work cross-functionally with internal teams to deliver strategic value and ensure long-term client success.",
      requirements: [
        "Bachelor’s degree in Business, Marketing, or related field (MBA is a plus).",
        "5+ years of experience in account management, sales, or client services—preferably in B2B or SaaS environments.",
        "Proven track record of managing large enterprise accounts and meeting/exceeding revenue goals.",
        "Excellent communication, negotiation, and presentation skills.",
        "Strong analytical and problem-solving abilities.",
        "Proficiency with CRM platforms and other sales tools.",
        "Proficiency with Microsoft Tools – Excel, Word, PowerPoint.",
        "Ability to generate PowerPoint Slides and present to Customers.",
        "The ability to work independently, leverage internal resources, and lead sales initiatives.",
        "",
      ],
      responsibilities: [
        "Account Management: Own and manage relationships with assigned clients, serving as their trusted advisor. Build and nurture strong relationships with key stakeholders and executives within client organizations to foster trust and loyalty.",
        "Contract Management: Draft, review, and manage contractual documents to ensure compliance with company policies and client requirements.",
        "Client Success: Ensure client satisfaction through consistent communication, problem-solving, and proactive support.",
        "Strategic Planning: Develop strategic account plans to deepen customer engagement and increase product adoption. Revenue Growth/Sales & Pipeline Management: Identify upselling and cross-selling opportunities to expand account revenue. Maintain an accurate sales pipeline, forecast performance, and track key performance indicators (KPIs) to ensure consistent results.",
        "Retention: Drive account renewals and reduce churn by maintaining a high level of customer engagement.",
        "Proposal Development: Prepare detailed proposals, Statements of Work (SOWs), and renewal documentation for clients.",
        "Cross-functional Collaboration: Partner with sales, marketing, product, and customer success teams to deliver exceptional service and solutions.",
        "Reporting: Maintain accurate records of client interactions and account activity in CRM tools (e.g., Salesforce).",
        "Market Insights: Stay informed on industry trends, client business changes, and competitive landscape to position offerings effectively.",
        "Contract Negotiations: Lead negotiations for complex contractual agreements, ensuring a balance between client expectations and company objectives.",
        "Problem-Solving: Act as a client advocate, addressing and resolving issues promptly through strong problem-solving skills and collaboration with cross-functional teams.",
        "Reporting & Analytics: Generate regular account performance reports, revenue forecasts, and business reviews for both clients and internal leadership.",
        "Legal & Compliance Awareness: Familiarity with common contractual terms, data security, and regulatory requirements (e.g., GDPR, SOC 2).",
      ],
      qualifications: [
        "Experience working in a fast-paced, high-growth environment.",
        "Understanding of IT Industry needs and challenges.",
        "Technical background or experience selling complex solutions is a plus.",
      ],
      workConditions: [
        "Full-time position.",
        "Fully Remote – any timezone, preferable US EST.",
        "Travel to client sites or industry events.",
        "Ability to travel overseas to customers, industry events, conferences, or client workshops (Company Paid)",
      ],
      salary: [
        "Negotiable, Based on location and experience. Paid monthly in USD.",
      ],

    },
    {
      id: 2,
      title: "Senior AI Infrastructure Architect",
      location: "Remote (Global)",
      type: "Full-time",
      icon: HiSparkles,
      color: "text-blue-400",
      published: "December 15, 2024",
      duration: "Permanent",
      category: "Infrastructure",
      jobId: "COMP-001",
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
      id: 3,
      title: "Cloud-Native Application Modernization Consultant",
      location: "New York, NY or Bangalore, India (Hybrid)",
      type: "Full-time",
      icon: HiCloud,
      color: "text-green-400",
      published: "December 15, 2024",
      duration: "Permanent",
      category: "Cloud & DevOps",
      jobId: "COMP-002",
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
      id: 4,
      title: "Automation Solutions Engineer",
      location: "London, UK or Remote (EMEA)",
      type: "Full-time",
      icon: HiCog,
      color: "text-purple-400",
      published: "December 15, 2024",
      duration: "Permanent",
      category: "Automation",
      jobId: "COMP-003",
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
      id: 5,
      title: "IT Cost Optimization Strategist",
      location: "San Francisco, CA or Singapore (Hybrid)",
      type: "Full-time",
      icon: HiCurrencyDollar,
      color: "text-yellow-400",
      published: "December 15, 2024",
      duration: "Permanent",
      category: "Strategy & Consulting",
      jobId: "COMP-004",
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
      id: 6,
      title: "Data-Driven Strategy Consultant (Healthcare Focus)",
      location: "Boston, MA or Remote (North America)",
      type: "Full-time",
      icon: HiHeart,
      color: "text-red-400",
      published: "December 15, 2024",
      duration: "Permanent",
      category: "Healthcare Technology",
      jobId: "COMP-005",
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

  useEffect(() => {
    const foundJob = jobsData.find(j => j.id === parseInt(jobId));
    setJob(foundJob);
    window.scrollTo(0, 0);
  }, [jobId]);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Job Not Found</h2>
          <Link to="/careers" className="text-primary-bgYellow hover:underline">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <ScrollToTop />

      {/* Header Section */}
      <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/careers"
              className="inline-flex items-center text-primary-bgYellow hover:text-yellow-300 transition-colors duration-300 group"
            >
              <HiArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Careers
            </Link>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center">
              <job.icon className={`w-8 h-8 ${job.color}`} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {job.title}
              </h1>
              <p className="text-gray-400 text-lg">CompuZign</p>
            </div>
          </motion.div>

          {/* Job Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            {job.published &&
              <div className="bg-white/5 rounded-xl p-4 border border-gray-700/40">
                <div className="flex items-center text-gray-400 mb-2">
                  <HiCalendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Published</span>
                </div>
                <p className="text-white font-medium">{job.published}</p>
              </div>
            }

            {job.location &&
              <div className="bg-white/5 rounded-xl p-4 border border-gray-700/40">
                <div className="flex items-center text-gray-400 mb-2">
                  <HiLocationMarker className="w-4 h-4 mr-2" />
                  <span className="text-sm">Location</span>
                </div>
                <p className="text-white font-medium">{job.location}</p>
              </div>
            }

            {job.category &&
              <div className="bg-white/5 rounded-xl p-4 border border-gray-700/40">
                <div className="flex items-center text-gray-400 mb-2">
                  <HiTag className="w-4 h-4 mr-2" />
                  <span className="text-sm">Category</span>
                </div>
                <p className="text-white font-medium">{job.category}</p>
              </div>
            }

            {job.duration &&
              <div className="bg-white/5 rounded-xl p-4 border border-gray-700/40">
                <div className="flex items-center text-gray-400 mb-2">
                  <HiClock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Duration</span>
                </div>
                <p className="text-white font-medium">{job.duration}</p>
              </div>
            }
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Description Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">DESCRIPTION</h2>

              {/* Role Overview */}
              <div className="mb-8">
                {job.overview &&
                  <>
                    <h3 className="text-lg font-semibold text-primary-bgYellow mb-4">Details:</h3>
                    <p className="text-gray-200 leading-relaxed mb-6">
                      {job.overview}
                    </p>
                  </>
                }

                {/* Language */}
                {job.language &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Language:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.language}
                    </ul>
                  </div>
                }
                {job.jobSummary &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Job Summary:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.jobSummary}
                    </ul>
                  </div>
                }
                {job.responsibilities &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-bgYellow mr-3">•</span>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }

                {/* Qualifications */}
                {job.qualifications &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Qualifications:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.qualifications.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-bgYellow mr-3">•</span>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                {job.workConditions &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Work Conditions:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.workConditions.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-bgYellow mr-3">•</span>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                {job.salary &&
                  <div className="mb-8">
                    <h4 className="text-md font-semibold text-white mb-4 flex items-center">
                      Salary:
                    </h4>
                    <ul className="space-y-2 ml-6">
                      {job.salary}
                    </ul>
                  </div>
                }


                {/* Why Join Us */}
                <div className="bg-gradient-to-r from-primary-bgYellow/10 to-primary-bgYellow/5 p-6 rounded-xl border border-primary-bgYellow/30 mb-8">
                  <h4 className="text-lg font-semibold text-primary-bgYellow mb-3">Why Join CompuZign?</h4>
                  <p className="text-gray-200 leading-relaxed">{job.impact}</p>
                </div>
              </div>

              {/* Job ID */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm">
                  <strong>JOBID:</strong> {job.jobId}
                </p>
              </div>

              {/* Apply Section */}
              <div className="bg-white/5 rounded-xl p-6 border border-gray-700/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Ready to Apply?</h3>
                    <p className="text-gray-300 text-sm">
                      {job.applicationInstructions}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={`mailto:contactus@compuzign.com?subject=Application for ${job.title} - ${job.jobId}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-bgYellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 group"
                    >
                      <HiMail className="w-4 h-4 mr-2" />
                      Apply Online
                      <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 