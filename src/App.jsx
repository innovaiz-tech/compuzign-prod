import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import RootLayouts from "./components/layouts/RootLayouts";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const CyberRecoveryMonitoring = lazy(() => import("./pages/CyberRecoveryMonitoring"));
  const ExtendedThreatDetection = lazy(() => import("./pages/ExtendedThreatDetection"));
  const DisasterRecovery = lazy(() => import("./pages/DisasterRecovery"));
  const PrivilegedAccessStrategies = lazy(() => import("./pages/PrivilegedAccessStrategies"));
  const RansomwareResponse = lazy(() => import("./pages/RansomwareResponse"));
  const VulnerabilityAssessment = lazy(() => import("./pages/VulnerabilityAssessment"));
  const StorageMigration = lazy(() => import("./pages/StorageMigration"));
  const DataDrivenConsulting = lazy(() => import("./pages/DataDrivenConsulting"));
  const Careers = lazy(() => import("./pages/Careers"));
  const JobDetail = lazy(() => import("./pages/JobDetail"));
  const ComputeMigration = lazy(() => import("./pages/ComputeMigration"));
  const CloudMigration = lazy(() => import("./pages/CloudMigration"));
  const AIInfrastructureHPC = lazy(() => import("./pages/AIInfrastructureHPC"));
  const ApplicationManager = lazy(() => import("./pages/ApplicationManager"));
  const ApplicationModernization = lazy(() => import("./pages/ApplicationModernization"));
  const IntelligentAutomation = lazy(() => import("./pages/IntelligentAutomation"));
  const CostOptimization = lazy(() => import("./pages/CostOptimization"));
  const CloudTransformation = lazy(() => import("./pages/CloudTransformation"));
  const MonitoringAutomation = lazy(() => import("./pages/MonitoringAutomation"));
  const NetworkOperationsCenter = lazy(() => import("./pages/NetworkOperationsCenter"));
  const SecurityOperationsCenter = lazy(() => import("./pages/SecurityOperationsCenter"));
  const CyberResilience = lazy(() => import("./pages/CyberResilience"));
  const MobilityManagement = lazy(() => import("./pages/MobilityManagement"));
  const ManagedServices = lazy(() => import("./pages/ManagedServices"));
  const Contact = lazy(() => import("./pages/Contact"));
  const RaaS = lazy(() => import("./pages/RaaS"));
  const SupportAsAService = lazy(() => import("./pages/SupportAsAService"));
  const Partner = lazy(() => import("./pages/Partner"));
  const CaseStudies = lazy(() => import("./pages/CaseStudies"));
  const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
  const OurLeaders = lazy(() => import("./pages/OurLeaders"));
  const GetAQuote = lazy(() => import("./pages/GetAQuote"));
  const PageNotFound = lazy(() => import("./pages/PageNotFound"));


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
        <Route path='/get-a-quote' element={<GetAQuote />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    ),
    {
      basename: '/'
    }
  )

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;