import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import ExtendedThreatDetection from "./pages/ExtendedThreatDetection";
import DisasterRecovery from "./pages/DisasterRecovery";
import PrivilegedAccessStrategies from "./pages/PrivilegedAccessStrategies";
import VulnerabilityAssessment from "./pages/VulnerabilityAssessment";
import RansomwareResponse from "./pages/RansomwareResponse";
import CyberRecoveryMonitoring from "./pages/CyberRecoveryMonitoring";
import StorageMigration from "./pages/StorageMigration";
import DataDrivenConsulting from "./pages/DataDrivenConsulting";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import ComputeMigration from "./pages/ComputeMigration";
import CloudMigration from "./pages/CloudMigration";
import AIInfrastructureHPC from "./pages/AIInfrastructureHPC";
import ApplicationManager from "./pages/ApplicationManager";
import ApplicationModernization from "./pages/ApplicationModernization";
import IntelligentAutomation from "./pages/IntelligentAutomation";
import CostOptimization from "./pages/CostOptimization";
import CloudTransformation from "./pages/CloudTransformation";
import MonitoringAutomation from "./pages/MonitoringAutomation";
import NetworkOperationsCenter from "./pages/NetworkOperationsCenter";
import SecurityOperationsCenter from "./pages/SecurityOperationsCenter";
import CyberResilience from "./pages/CyberResilience";
import MobilityManagement from "./pages/MobilityManagement";
import ManagedServices from "./pages/ManagedServices";
import Contact from "./pages/Contact";
import RaaS from "./pages/RaaS";
import SupportAsAService from "./pages/SupportAsAService";
import Partner from "./pages/Partner";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import OurLeaders from "./pages/OurLeaders";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/cyber-recovery-monitoring' element={<CyberRecoveryMonitoring />} />
        <Route path='/extended-threat-detection' element={<ExtendedThreatDetection />} />
        <Route path='/disaster-recovery-business-continuity' element={<DisasterRecovery />} />
        <Route path='/privileged-access-strategies' element={<PrivilegedAccessStrategies />} />
        <Route path='/ransomware-response' element={<RansomwareResponse />} />
        <Route path='/vulnerability-assessment-remediation' element={<VulnerabilityAssessment />} />
        <Route path='/storage-migration' element={<StorageMigration />} />
        <Route path='/data-driven-consulting' element={<DataDrivenConsulting />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/careers/:jobId' element={<JobDetail />} />
        <Route path='/compute-migration' element={<ComputeMigration />} />
        <Route path='/cloud-migration' element={<CloudMigration />} />
        <Route path='/application-manager' element={<ApplicationManager />} />
        <Route path='/ai-infrastructure' element={<AIInfrastructureHPC />} />
        <Route path='/app-modernization' element={<ApplicationModernization />} />
        <Route path='/automation' element={<IntelligentAutomation />} />
        <Route path='/cost-optimization' element={<CostOptimization />} />
        <Route path='/cloud-transformation' element={<CloudTransformation />} />
        <Route path='/monitoring-automation' element={<MonitoringAutomation />} />
        <Route path='/noc' element={<NetworkOperationsCenter />} />
        <Route path='/soc' element={<SecurityOperationsCenter />} />
        <Route path='/cyber-resilience' element={<CyberResilience />} />
        <Route path='/mobility-management' element={<MobilityManagement />} />
        <Route path='/managed-services' element={<ManagedServices />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/raas' element={<RaaS />} />
        <Route path='/support-as-a-service' element={<SupportAsAService />} />
        <Route path='/partners' element={<Partner />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/case-studies/:slug' element={<CaseStudyDetail />} />
        <Route path='/our-leaders' element={<OurLeaders />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    ),
    {
      basename: '/'
    }
  )

  return <RouterProvider router={router} />;
}

export default App;