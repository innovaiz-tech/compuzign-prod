import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiX, 
  HiUser, 
  HiMail, 
  HiBriefcase, 
  HiOfficeBuilding,
  HiPhone,
  HiGlobe,
  HiChatAlt2,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi';

const ContactModal = ({ isOpen, onClose, serviceType = '', pageName = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    organizationName: '',
    phoneNumber: '',
    countryCode: '+1',
    industry: '',
    enquiryType: serviceType || 'Request for Service',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
      if (serviceType) {
        setFormData(prev => ({ ...prev, enquiryType: serviceType }));
      }
    }
  }, [isOpen, serviceType]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
    if (!formData.enquiryType.trim()) newErrors.enquiryType = 'Enquiry type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
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
        ...formData,
        fullPhoneNumber: `${formData.countryCode} ${formData.phoneNumber}`,
        source: pageName || 'Contact Modal',
        timestamp: new Date().toISOString()
      });
      
      setIsSubmitted(true);
      
      // Auto close after success
      setTimeout(() => {
        onClose();
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          organizationName: '',
          phoneNumber: '',
          countryCode: '+1',
          industry: '',
          enquiryType: serviceType || 'Request for Service',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {!isSubmitted ? (
            <div className="flex flex-col lg:flex-row">
              {/* Left Panel - Form */}
              <div className="flex-1 p-6 lg:p-8 overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      Let's get you connected.
                    </h2>
                    {serviceType && (
                      <p className="text-primary-bgYellow font-medium">
                        Service: {serviceType}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <HiUser className="inline w-4 h-4 mr-1" />
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <HiMail className="inline w-4 h-4 mr-1" />
                        Business Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <HiOfficeBuilding className="inline w-4 h-4 mr-1" />
                        Company*
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        placeholder="Where do you work?"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                          errors.organizationName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.organizationName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <HiExclamationCircle className="w-4 h-4 mr-1" />
                          {errors.organizationName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <HiBriefcase className="inline w-4 h-4 mr-1" />
                      Job Title*
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Enter your job title"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                        errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.jobTitle}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <HiPhone className="inline w-4 h-4 mr-1" />
                      Phone*
                    </label>
                    <div className="flex">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent bg-gray-50"
                      >
                        {countryCodes.map(({ code, flag }) => (
                          <option key={code} value={code}>
                            {flag} {code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                          errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <HiGlobe className="inline w-4 h-4 mr-1" />
                      Industry*
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                        errors.industry ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.industry}
                      </p>
                    )}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What type of assistance are you looking for?*
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all ${
                        errors.enquiryType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      {enquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <HiExclamationCircle className="w-4 h-4 mr-1" />
                        {errors.enquiryType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <HiChatAlt2 className="inline w-4 h-4 mr-1" />
                      What can we help you with?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-bgYellow focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By clicking Submit, I agree to the use of my personal data in accordance with 
                    CompuZign Privacy Notice. CompuZign will not sell, trade, lease, or rent your 
                    personal data to third parties. This site is protected by reCAPTCHA and the Google 
                    Privacy Policy and Terms of Service apply.
                  </p>
                </form>
              </div>

              {/* Right Panel - Info */}
              <div className="lg:w-80 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,218,23,0.2)_0%,transparent_50%)]"></div>
                </div>

                <div className="relative z-10">
                  {/* Existing Customer Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Existing Customer?</h3>
                    <p className="text-gray-300 mb-4">Contact Our Customer Support</p>
                    <a
                      href="https://compuzign.atlassian.net/servicedesk/customer/user/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 group"
                    >
                      Get Customer Support
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Experiencing a Breach?</h3>
                    <p className="text-gray-300 mb-4">Call Us Now</p>
                    <a
                      href="callto:+18558683733"
                      className="inline-flex items-center text-2xl font-bold text-primary-bgYellow hover:text-yellow-300 transition-colors group"
                    >
                      +1 (904) 685-2138
                      <svg className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 opacity-20">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
                    <defs>
                      <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                        <polygon points="25,2 47,14.5 47,39.5 25,52 3,39.5 3,14.5" fill="none" stroke="currentColor" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="200" height="200" fill="url(#hexagons)"/>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // Success State
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <HiCheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank you for your submission!
              </h2>
              <p className="text-gray-600 mb-6">
                We've received your request and our team will get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-primary-bgYellow hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
