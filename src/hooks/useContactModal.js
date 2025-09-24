import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// Service mapping based on routes
const SERVICE_MAPPING = {
  '/storage-migration': 'Storage Migration',
  '/compute-migration': 'Compute Migration',
  '/cloud-migration': 'Cloud Migration',
  '/cyber-recovery-monitoring': 'Cyber Recovery & Monitoring',
  '/extended-threat-detection': 'Extended Threat Detection & Response',
  '/disaster-recovery': 'Disaster Recovery & Business Continuity',
  '/privileged-access-strategies': 'Privileged Access Strategies',
  '/ransomware-response': 'Ransomware Response Team',
  '/vulnerability-assessment': 'Vulnerability Assessment & Remediation',
  '/cyber-resilience': 'Cyber Resilience',
  '/mobility-management': 'Mobility Management',
  '/managed-services': 'Managed Services',
  '/ai-infrastructure-hpc': 'AI Infrastructure & HPC Assessment',
  '/application-modernization': 'Application Modernization',
  '/intelligent-automation': 'Intelligent Automation',
  '/cost-optimization': 'Cost Optimization',
  '/cloud-transformation': 'Cloud Transformation',
  '/monitoring-automation': 'Monitoring & Automation',
  '/network-operations-center': 'Network Operations Center',
  '/security-operations-center': 'Security Operations Center',
  '/data-driven-consulting': 'Data-Driven Consulting',
  '/raas': 'Resource as a Service (RaaS)',
  '/support-as-a-service': 'Support as a Service (SaaS)',
  '/application-manager': 'Application Manager',
  '/partner': 'Partnership Inquiry',
  '/about': 'General Inquiry',
  '/careers': 'Career Opportunity',
  '/case-studies': 'Case Study Inquiry',
  '/case-study-detail': 'Case Study Inquiry'
};

// Page name mapping for better context
const PAGE_NAME_MAPPING = {
  '/storage-migration': 'Storage Migration Page',
  '/compute-migration': 'Compute Migration Page',
  '/cloud-migration': 'Cloud Migration Page',
  '/cyber-recovery-monitoring': 'Cyber Recovery & Monitoring Page',
  '/extended-threat-detection': 'Extended Threat Detection Page',
  '/disaster-recovery': 'Disaster Recovery Page',
  '/privileged-access-strategies': 'Privileged Access Strategies Page',
  '/ransomware-response': 'Ransomware Response Page',
  '/vulnerability-assessment': 'Vulnerability Assessment Page',
  '/cyber-resilience': 'Cyber Resilience Page',
  '/mobility-management': 'Mobility Management Page',
  '/managed-services': 'Managed Services Page',
  '/ai-infrastructure-hpc': 'AI Infrastructure Page',
  '/application-modernization': 'Application Modernization Page',
  '/intelligent-automation': 'Intelligent Automation Page',
  '/cost-optimization': 'Cost Optimization Page',
  '/cloud-transformation': 'Cloud Transformation Page',
  '/monitoring-automation': 'Monitoring & Automation Page',
  '/network-operations-center': 'Network Operations Center Page',
  '/security-operations-center': 'Security Operations Center Page',
  '/data-driven-consulting': 'Data-Driven Consulting Page',
  '/raas': 'RaaS Page',
  '/support-as-a-service': 'SaaS Page',
  '/application-manager': 'Application Manager Page',
  '/partner': 'Partner Page',
  '/about': 'About Page',
  '/careers': 'Careers Page',
  '/case-studies': 'Case Studies Page',
  '/case-study-detail': 'Case Study Detail Page'
};

export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Get service type based on current route
  const getServiceType = useCallback(() => {
    return SERVICE_MAPPING[location.pathname] || 'Request for Service';
  }, [location.pathname]);

  // Get page name for analytics/tracking
  const getPageName = useCallback(() => {
    return PAGE_NAME_MAPPING[location.pathname] || 'Unknown Page';
  }, [location.pathname]);

  // Open modal
  const openModal = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  // Toggle modal
  const toggleModal = useCallback(() => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }, [isOpen, openModal, closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    serviceType: getServiceType(),
    pageName: getPageName()
  };
};

export default useContactModal;

