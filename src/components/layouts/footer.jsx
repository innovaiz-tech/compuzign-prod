import { HiPhone, HiMail, HiLocationMarker, HiArrowRight, HiGlobeAlt } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Cyber Resilience', href: '/cyber-resilience' },
    { name: 'Mobility Management', href: '/mobility-management' },
    { name: 'Managed Services', href: '/managed-services' },
    { name: 'Data-Driven Consulting', href: '/data-driven-consulting' },
    { name: 'RaaS', href: '/raas' },
    { name: 'Support as a Service', href: '/support-as-a-service' },
  ];

  const company = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const resources = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-bgYellow to-yellow-400 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
                <div className='flex flex-col'>
                  <span className="text-2xl font-bold">
                    <span className="text-white">Compu</span>
                    <span className="text-primary-bgYellow">Zign</span>
                  </span>
                  <span className='text-primary-bgYellow text-xs italic'>Let us do IT for you!!!</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Empowering businesses with innovative IT solutions, cloud migration, 
              cybersecurity, and managed services. Your trusted partner in digital transformation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/compuzign_/" target='_blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-bgYellow hover:text-black transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/CompuZign" target='_blank' className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-bgYellow hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a target='_blank' href="https://www.linkedin.com/company/compuzign/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-bgYellow hover:text-black transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-300 hover:text-primary-bgYellow transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-primary-bgYellow transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href} 
                    className="text-gray-300 hover:text-primary-bgYellow transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <HiLocationMarker className="w-5 h-5 text-primary-bgYellow mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Headquarters</h4>
                <p className="font-medium">Mandeville, JM</p>
                <p>IT Services and IT Consulting</p>
                <p className="text-sm text-gray-400 mt-1">Founded 1998 • 11-50 employees</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <a href="tel:+19046852138" className="flex items-start space-x-3 group">
                <HiPhone className="w-5 h-5 text-gray-900" />
                <div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-primary-bgYellow transition-colors">Call Us</h4>
                  <a href="tel:+19046852138" className="text-gray-300 hover:text-white transition-colors font-medium text-sm">
                    +1 (904) 685-2138
                  </a>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <HiMail className="w-5 h-5 text-primary-bgYellow mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Email Us</h4>
                <a 
                  href="mailto:contact@compuzign.com" 
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                >
                  contact@compuzign.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">Get the latest insights on IT solutions and industry trends.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary-bgYellow text-black font-semibold rounded-r-lg hover:bg-yellow-400 transition-colors flex items-center">
                <span className="hidden sm:inline">Subscribe</span>
                <HiArrowRight className="w-4 h-4 sm:ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} CompuZign. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
