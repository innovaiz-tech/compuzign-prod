import Button from '../components/common/button';
import React, { useEffect, useState } from 'react';
import contactHeroBg from '../assets/contact-hero-bg.jpg';
import { motion } from 'framer-motion';
import { 
  HiPhone, 
  HiMail, 
  HiLocationMarker, 
  HiOfficeBuilding,
  HiUser,
  HiBriefcase,
  HiGlobe,
  HiChatAlt2,
  HiCheckCircle,
  HiExclamationCircle,
  HiArrowRight,
  HiClock,
  HiShieldCheck
} from 'react-icons/hi';
import useScrollToTop from '../hooks/useScrollToTop';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', jobTitle: '', organizationName: '', 
    phoneNumber: '', countryCode: '+1', industry: '', enquiryType: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Country codes data
  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+971', country: 'AE', flag: '🇦🇪' }
  ];

  // Industry options
  const industries = [
    'Technology', 'Healthcare', 'Financial Services', 'Manufacturing',
    'Retail', 'Education', 'Government', 'Non-profit', 'Media & Entertainment',
    'Transportation', 'Energy', 'Real Estate', 'Other'
  ];

  // Enquiry types
  const enquiryTypes = [
    'Request for Service', 'Alliance', 'Investor', 'Media', 'Others'
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!form.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!form.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(form.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!form.industry.trim()) newErrors.industry = 'Industry is required';
    if (!form.enquiryType.trim()) newErrors.enquiryType = 'Enquiry type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', {
        ...form,
        fullPhoneNumber: `${form.countryCode} ${form.phoneNumber}`,
        source: 'Contact Page',
        timestamp: new Date().toISOString()
      });
      
    setSubmitted(true);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  useScrollToTop()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={contactHeroBg} 
          alt="Contact background" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80 z-10" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,218,23,0.2)_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-30 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              Contact <span className="text-primary-bgYellow">Us</span>
            <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary-bgYellow to-transparent rounded-full"
                initial={{ scaleX: 0, originX: 0.5 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
          </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-200">
              Let's connect and drive your digital transformation to success
            </p>
            
            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+19046852138"
                className="group flex items-center px-6 py-3 bg-primary-bgYellow text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-bgYellow/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiPhone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Call Us Now
              </motion.a>
              
              <motion.a
                href="mailto:contact@compuzign.com"
                className="group flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
        {/* Contact Form */}
            <motion.div
              {...fadeInUp}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Share your business requirements and let us help you find the perfect solution.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiCheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Thank you for your submission!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We've received your request and our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary-bgYellow hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <HiUser className="inline w-4 h-4 mr-1" />
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400 ${
                          errors.firstName ? 'border-red-500' : 'border-white/20'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
              </div>

              <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400"
                      />
                    </div>
              </div>

                  {/* Email & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <HiMail className="inline w-4 h-4 mr-1" />
                        Business Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400 ${
                          errors.email ? 'border-red-500' : 'border-white/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
              </div>

              <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <HiOfficeBuilding className="inline w-4 h-4 mr-1" />
                        Company*
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={form.organizationName}
                        onChange={handleChange}
                        placeholder="Where do you work?"
                        className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400 ${
                          errors.organizationName ? 'border-red-500' : 'border-white/20'
                        }`}
                      />
                      {errors.organizationName && (
                        <p className="mt-1 text-sm text-red-400 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.organizationName}
                        </p>
                      )}
                    </div>
              </div>

                  {/* Job Title */}
              <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <HiBriefcase className="inline w-4 h-4 mr-1" />
                      Job Title*
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={form.jobTitle}
                      onChange={handleChange}
                      placeholder="Enter your job title"
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400 ${
                        errors.jobTitle ? 'border-red-500' : 'border-white/20'
                      }`}
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.jobTitle}
                      </p>
                    )}
              </div>

                  {/* Phone Number */}
              <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <HiPhone className="inline w-4 h-4 mr-1" />
                      Phone*
                    </label>
                    <div className="flex">
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className="px-3 py-3 bg-white/10 border border-r-0 border-white/20 rounded-l-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent text-white"
                      >
                        {countryCodes.map(({ code, flag }) => (
                          <option key={code} value={code} className="bg-slate-800">
                            {flag} {code}
                          </option>
                        ))}
                </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`flex-1 px-4 py-3 bg-white/10 border rounded-r-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white placeholder-gray-400 ${
                          errors.phoneNumber ? 'border-red-500' : 'border-white/20'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.phoneNumber}
                      </p>
                    )}
              </div>

                  {/* Industry */}
              <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <HiGlobe className="inline w-4 h-4 mr-1" />
                      Industry*
                    </label>
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white ${
                        errors.industry ? 'border-red-500' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-slate-800">Select your industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry} className="bg-slate-800">{industry}</option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.industry}
                      </p>
                    )}
              </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      What type of assistance are you looking for?*
                    </label>
                    <select
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all text-white ${
                        errors.enquiryType ? 'border-red-500' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-slate-800">Select enquiry type</option>
                      {enquiryTypes.map(type => (
                        <option key={type} value={type} className="bg-slate-800">{type}</option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p className="mt-1 text-sm text-red-400 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.enquiryType}
                      </p>
          )}
        </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <HiChatAlt2 className="inline w-4 h-4 mr-1" />
                      What can we help you with?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your requirements..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-bgYellow hover:bg-yellow-400 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit Message
                        <HiArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    By clicking Submit, I agree to the use of my personal data in accordance with 
                    CompuZign Privacy Notice. CompuZign will not sell, trade, lease, or rent your 
                    personal data to third parties.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
          <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Headquarters */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                  <div className="p-4 bg-primary-bgYellow rounded-2xl mr-4">
                    <HiLocationMarker className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Headquarters</h3>
                    <p className="text-primary-bgYellow font-medium">Mandeville, JM</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                    <HiLocationMarker className="w-5 h-5 text-primary-bgYellow flex-shrink-0 mt-1" />
                    <div className="ml-3">
                      <p className="text-gray-300 font-medium">Mandeville, Jamaica</p>
                      <p className="text-gray-300 font-medium">IT Services and IT Consulting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <HiPhone className="w-5 h-5 text-primary-bgYellow flex-shrink-0" />
                    <a href="tel:+19046852138" className="ml-3 text-white font-medium hover:text-primary-bgYellow transition-colors">
                      +1 (904) 685-2138
                    </a>
                </div>
                
                <div className="flex items-center">
                    <HiMail className="w-5 h-5 text-primary-bgYellow flex-shrink-0" />
                    <a href="mailto:contact@compuzign.com" className="ml-3 text-white font-medium hover:text-primary-bgYellow transition-colors">
                      contact@compuzign.com
                    </a>
                  </div>
                  
                  <div className="mt-4 p-3 bg-primary-bgYellow/10 rounded-lg border border-primary-bgYellow/20">
                    <p className="text-primary-bgYellow font-semibold text-sm">
                      Founded 1998 • 11-50 employees
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="tel:+19046852138"
                    className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-bgYellow/50 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-green-600 rounded-lg mr-4 group-hover:bg-green-500 transition-colors">
                      <HiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Call Us</p>
                      <p className="text-gray-400 text-sm">+1 (904) 685-2138</p>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-bgYellow group-hover:translate-x-1 transition-all" />
                  </motion.a>

                  <motion.a
                    href="mailto:contact@compuzign.com"
                    className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-bgYellow/50 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-blue-600 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors">
                      <HiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email Us</p>
                      <p className="text-gray-400 text-sm">contact@compuzign.com</p>
                    </div>
                    <HiArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-bgYellow group-hover:translate-x-1 transition-all" />
                  </motion.a>

                  <motion.a
                    href="https://compuzign.atlassian.net/servicedesk/customer/user/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-bgYellow/50 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-purple-600 rounded-lg mr-4 group-hover:bg-purple-500 transition-colors">
                      <HiShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Customer Support</p>
                      <p className="text-gray-400 text-sm">Existing customers</p>
                </div>
                    <HiArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-primary-bgYellow group-hover:translate-x-1 transition-all" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}
