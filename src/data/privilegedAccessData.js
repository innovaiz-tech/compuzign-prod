import { 
  HiLockClosed, 
  HiShieldCheck, 
  HiEye,
  HiCog,
  HiKey,
  HiDatabase,
  HiClipboardCheck,
  HiChartBar,
  HiUserGroup,
  HiServer,
  HiCode,
  HiRefresh
} from 'react-icons/hi';

// Statistics data for the page
export const statsData = [
  {
    value: "40%",
    label: "of insider cyberattacks involve privileged users"
  },
  {
    value: "99.9%",
    label: "uptime with our privileged access management"
  },
  {
    value: "60%",
    label: "reduction in security incidents"
  },
  {
    value: "24/7",
    label: "continuous monitoring and support"
  }
];

// Flip cards for section 1
export const section1Cards = [
  {
    title: "Zero Trust Architecture",
    description: "Implement comprehensive zero trust strategies that verify every user and device before granting access to critical systems and sensitive data.",
    icon: HiShieldCheck
  },
  {
    title: "Advanced Threat Detection",
    description: "Continuous monitoring and analysis of privileged user activities to detect and respond to potential security threats in real-time.",
    icon: HiEye
  },
  {
    title: "Credential Protection",
    description: "Secure vaulting and management of privileged credentials with automated rotation and policy enforcement across your enterprise.",
    icon: HiLockClosed
  }
];

// Key features/strategies list
export const keyStrategies = [
  {
    icon: HiKey,
    text: "Password vaulting"
  },
  {
    icon: HiServer,
    text: "Endpoint control"
  },
  {
    icon: HiCog,
    text: "Manage policies"
  },
  {
    icon: HiCode,
    text: "Manage DevOps secrets"
  },
  {
    icon: HiUserGroup,
    text: "Manage service and shared accounts"
  },
  {
    icon: HiShieldCheck,
    text: "Enforcement"
  },
  {
    icon: HiChartBar,
    text: "Reports and Continuous Monitoring"
  }
];

// Benefits data
export const benefitsData = [
  {
    title: "Enhanced Security Posture",
    description: "Reduce insider threat risks by up to 60% with comprehensive privileged access management and continuous monitoring.",
    icon: HiShieldCheck
  },
  {
    title: "Compliance Assurance",
    description: "Meet regulatory requirements with automated reporting, audit trails, and policy enforcement across all privileged accounts.",
    icon: HiClipboardCheck
  },
  {
    title: "Operational Efficiency",
    description: "Streamline privileged access workflows while maintaining security with automated provisioning and de-provisioning.",
    icon: HiRefresh
  },
  {
    title: "Real-time Visibility",
    description: "Gain complete visibility into privileged user activities with advanced analytics and real-time monitoring dashboards.",
    icon: HiEye
  }
];

// Partner information
export const partnerInfo = {
  primaryPartner: "IBM®",
  technologyPartners: ["Delinea"],
  description: "CompuZign's enable zero trust strategies to help minimize risk to your enterprise. We work with Global Partners such as IBM®, with products powered by the likes of Delinea to enable zero trust strategies to help minimize risk to your enterprise."
};

// External reference
export const externalReference = {
  title: "2021 IBM X-Force Insider Threat Report",
  url: "https://www.ibm.com/downloads/documents/us-en/107a02e949c8f515",
  statistic: "40% of insider cyberattacks involved privileged users"
}; 