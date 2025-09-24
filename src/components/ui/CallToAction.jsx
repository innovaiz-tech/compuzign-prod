import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiArrowRight } from 'react-icons/hi';
import Button from '../common/button';
import ContactModal from './ContactModal';
import useContactModal from '../../hooks/useContactModal';

const contactMethods = [
  {
    icon: HiPhone,
    title: "Call Us",
    details: ["+1 (904) 685-2138"],
    href: "tel:+19046852138",
    description: "Speak directly with our experts"
  },
  {
    icon: HiMail,
    title: "Email Us",
    details: ["contact@compuzign.com"],
    href: "mailto:contact@compuzign.com",
    description: "Get detailed information via email"
  }
];

export default function CallToAction({
  title = "Ready to Transform Your IT Infrastructure?",
  subtitle = "Let's discuss how CompuZign can accelerate your digital transformation journey.",
  primaryButtonText = "Get Started Today",
  secondaryButtonText = "Schedule Consultation"
}) {
  const { isOpen, openModal, closeModal, serviceType, pageName } = useContactModal();
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 via-transparent to-purple-600/50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-6">
              <HiArrowRight className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {title}
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4 mx-auto group-hover:bg-white/30 transition-colors">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-blue-100 text-sm mb-2">{method.description}</p>
                  <div className="text-white font-medium">
                    {method.details.map((detail, idx) => (
                      <div key={idx}>{detail}</div>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="group relative px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25 flex items-center justify-center"
                onClick={openModal}
              >

                <span className="relative z-10 flex items-center gap-2">
                  {primaryButtonText}
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <a
                href="tel:+19046852138"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 flex items-center justify-center"
              >
                <HiPhone className="w-5 h-5 mr-2" />
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        serviceType={serviceType}
        pageName={pageName}
      />
    </div>
  );
} 