import { 
  HiShieldCheck, 
  HiCog,
  HiBeaker,
  HiChartBar,
  HiDatabase,
  HiSupport,
  HiGlobe,
  HiCloud,
  HiLightningBolt
} from 'react-icons/hi';

// Section 1 Data - From MD file
export const section1Cards = [
  {
    title: "Stay ahead of disasters",
    description: "Safeguard your business with tailored disaster recovery strategies designed to protect against natural and digital threats",
    icon: HiShieldCheck
  },
  {
    title: "Simplify complex recovery",
    description: "Let CompuZign handle the intricate details of recovery so your team can stay focused on driving business growth without disruption",
    icon: HiCog
  },
  {
    title: "Confidence through testing",
    description: "Gain peace of mind with regularly tested and refined DR plans that ensure you're prepared for the unexpected",
    icon: HiBeaker
  }
];

// Stats data - From TierPoint reference
export const statsData = [
  { value: '$85,000', label: 'Per hour is the average cost of downtime.', icon: HiChartBar },
  { value: '73%', label: 'Of companies were hit with a ransomware attack in 2023.', icon: HiShieldCheck },
  { value: '33%', label: 'Of data is typically unrecoverable after a ransomware attack.', icon: HiDatabase }
];

// Benefits data - From MD file
export const benefitsData = [
  {
    title: "Fully managed services",
    description: "Provided by our disaster recovery service experts",
    icon: HiSupport
  },
  {
    title: "Global SaaS offering",
    description: "Offered as part of our comprehensive Global SaaS platform",
    icon: HiGlobe
  },
  {
    title: "Multi-environment support",
    description: "Built for cloud, on-premises, and hybrid IT environments",
    icon: HiCloud
  },
  {
    title: "Cyber incident recovery",
    description: "Faster and more successful recoveries from cyber incidents and ransomware",
    icon: HiLightningBolt
  }
]; 