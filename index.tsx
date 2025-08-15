import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- ICONS (SVG components) ---
interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BusinessIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);
const HospitalityIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 22h14"></path><path d="M2 17h20"></path><path d="M12 2v2.5a2.5 2.5 0 0 1-5 0V2"></path><path d="M12 2v2.5a2.5 2.5 0 0 0 5 0V2"></path><path d="M12 17a5 5 0 0 0-5-5h10a5 5 0 0 0-5 5z"></path></svg>
);
const FinanceIcon: React.FC<IconProps> = (props) => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M12 12h.01"></path><path d="M17 12h.01"></path><path d="M7 12h.01"></path></svg>
);
const RetailIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);
const DevToolsIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="4" x2="12" y2="20"></line></svg>
);
const MarketplaceIcon: React.FC<IconProps> = (props) => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
      <path d="M12 22v-5"/>
      <path d="m17 14-5 2.5-5-2.5"/>
      <path d="m7 11.5 5 2.5 5-2.5"/>
    </svg>
);
const AiIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-3.38 19.53"/><path d="M12 2a10 10 0 0 1 3.38 19.53"/><path d="M12 2v20"/><path d="M22 12h-2.5m-15 0H2"/><path d="M12 22a10 10 0 0 0 3.38-19.53"/><path d="M12 22a10 10 0 0 1-3.38-19.53"/>
  </svg>
);
const CommunityIcon: React.FC<IconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);


// App Specific Icons
const CrmProIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M17 18a5 5 0 0 0-10 0"/><path d="M12 14v4"/><path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M6 21a2 2 0 0 0 2-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2 2 2 0 0 0 2 2Z"/></svg>;
const ErpSuiteIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M3 3h18v18H3z"/><path d="M9 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>;
const ProjectFlowIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M12 8l-2 2 2 2"/><path d="M12 14l2 2-2 2"/></svg>;
const HrmConnectIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 17v2h-2"/><path d="M20 13h2v-2"/><path d="M14 13h-2v2"/></svg>;
const HotelierHubIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>;
const EduManageIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7.9 3.2 2.3 4.1"/><path d="M16 17c.9-.9 1.5-2.1 1.7-3.4"/></svg>;
const ClinicOsIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M12 22V12"/><path d="M12 12L2 7"/><path d="M12 12l10-5"/></svg>;
const GovPortalIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M3 21h18"/><path d="M4 10h16"/><path d="M4 15h16"/><path d="M4 5l8-3 8 3"/><path d="M4 21V5"/></svg>;
const SecureBankIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M20 12V6H4v6"/><path d="M18 12v6H6v-6"/><path d="M12 12V6"/><path d="M12 12v6"/></svg>;
const CryptoWalletIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M20 12V8H4v4"/><path d="M20 12v4H4v-4"/><path d="M4 12H2"/><path d="M22 12h-2"/><path d="M12 12v8"/><path d="M12 4v8"/></svg>;
const DeFiDashboardIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M3 3v18h18"/><path d="M18 18v-4.5"/><path d="M18 9V3"/><path d="M3 9h15"/><path d="M3 15h15"/></svg>;
const LedgerGuardIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 12-2 2 2 2"/><path d="m15 12 2 2-2 2"/></svg>;
const PointOfSaleIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M18 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/><path d="M12 18V6"/><path d="M8 12h8"/></svg>;
const InventorySyncIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="m12 22 8.7-5"/><path d="M12 12v10"/><path d="M3.3 17 12 12"/></svg>;
const ECommerceKitIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M16 16h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="M12 12v8"/><path d="M9 20h6"/><path d="m9 12-2 2 2 2"/><path d="m15 12 2 2-2 2"/></svg>;
const RestaurantOsIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V2"/><path d="M4 11v11"/><path d="M8 11v11"/><path d="M12 11v11"/><path d="M16 11v11"/><path d="M20 11v11"/></svg>;
const ApiGatewayIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="m10 14 2-2 2 2"/></svg>;
const CodeRunnerIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M10 9l-4 3 4 3"/><path d="M14 9l4 3-4 3"/></svg>;
const DbManagerIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const CiCdPipelineIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M2 12h2"/><path d="M6 12h2"/><path d="M10 12h2"/><path d="M14 12h2"/><path d="M18 12h2"/><path d="M12 2v2"/><path d="M12 6v2"/><path d="M12 10v2"/><path d="M12 14v2"/><path d="M12 18v2"/></svg>;
const PluginMarketplaceIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 22v-5"/><path d="M9 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10h-2"/><path d="M15 17h-6"/></svg>;
const ThemeStoreIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M13.5 2c-5.62.44-10 5.16-10 10.95 0 6.01 4.86 10.9 10.88 10.9a10.9 10.9 0 0 0 10.88-10.9c0-5.45-3.96-9.97-9.1-10.88a1 1 0 0 0-1.1.95 1 1 0 0 0 .93 1.1 8.9 8.9 0 0 1 7.46 8.83c0 4.96-4.02 8.9-8.98 8.9s-8.98-3.94-8.98-8.9c0-4.6 3.4-8.43 7.88-8.87a1 1 0 0 0 1.07-1.01 1 1 0 0 0-1.04-.95z"/><circle cx="12" cy="9" r="1"/><circle cx="15.5" cy="12" r="1"/><circle cx="8.5" cy="12" r="1"/><circle cx="12" cy="15" r="1"/></svg>;
const IntegrationDirectoryIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const ModuleBuilderIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const DependencyManagerIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M6 9V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"/><path d="M6 15v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4"/><path d="M12 15v-6"/><rect x="3" y="9" width="18" height="6" rx="1"/></svg>;

const DataInsightIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-4"/><path d="M8 18v-2"/><path d="M16 18v-6"/></svg>;
const ModelStudioIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M10 6.5h4"/><path d="M6.5 10v4"/><path d="M17.5 10v4"/></svg>;
const AutomationEngineIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 6V3"/><path d="M12 21v-3"/><path d="M16.5 7.5l2-2"/><path d="M5.5 18.5l2-2"/><path d="M7.5 16.5l-2 2"/><path d="M18.5 5.5l-2 2"/><circle cx="12" cy="12" r="4"/><path d="M12 16a4 4 0 0 0 4-4"/><path d="M12 8a4 4 0 0 0-4 4"/></svg>;
const CognitiveServicesIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M12 4a8 8 0 0 0-8 8v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4a8 8 0 0 0-8-8z"/><path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/><path d="M12 22v-2"/><path d="M20 16h2"/><path d="M4 16H2"/></svg>;

const ForumFusionIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const KnowledgeBaseIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const FeedbackFlowIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const UrlShortenerIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/><line x1="8" y1="2" x2="8" y2="5"/><line x1="2" y1="8" x2="5" y2="8"/><line x1="16" y1="22" x2="16" y2="19"/><line x1="22" y1="16" x2="19" y2="16"/></svg>;

// Plugin Icons
const AiEnhancerIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M9.5 13l-2-2 2-2"/><path d="M14.5 13l2-2-2-2"/><path d="M12 18V6"/><path d="M3 10v4c0 1.7.9 3.2 2.3 4.1"/><path d="M21 14v-4c0-1.7-.9-3.2-2.3-4.1"/></svg>;
const AnalyticsIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M3 3v18h18"/><path d="M18 18v-4.5"/><path d="M18 9V3"/><path d="M3 9h15"/><path d="M3 15h15"/></svg>;
const SeoToolsIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"/></svg>;
const CmsConnectIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const SocialHubIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 17v2h-2"/><path d="M20 13h2v-2"/></svg>;
const PaymentGatewayIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>;

// --- Type Definitions ---
interface AppInfo {
  name: string;
  description: string;
  icon: React.ReactElement<IconProps>;
  launchable?: boolean;
}

interface Suite {
  icon: React.ReactElement<IconProps>;
  title: string;
  description: string;
  color: string;
  apps: AppInfo[];
}

// --- Data for App Suites ---
const appSuites: Suite[] = [
  {
    icon: <BusinessIcon />, title: 'Business & Enterprise', color: '#3498db',
    description: 'Scalable solutions for CRM, ERP, and project management to drive business growth.',
    apps: [
      { name: 'CRM Pro', description: 'A comprehensive Customer Relationship Management tool to track leads, manage contacts, and close deals faster.', icon: <CrmProIcon/> },
      { name: 'ERP Suite', description: 'Integrate all facets of an operation, including product planning, development, manufacturing, sales and marketing.', icon: <ErpSuiteIcon/> },
      { name: 'ProjectFlow', description: 'A collaborative project management platform for planning, executing, and monitoring team projects.', icon: <ProjectFlowIcon/> },
      { name: 'HRM Connect', description: 'Streamline your human resources with our all-in-one HR management software.', icon: <HrmConnectIcon/> },
    ],
  },
  {
    icon: <HospitalityIcon />, title: 'Public Sector', color: '#2ecc71',
    description: 'Specialized platforms for hospitality, schools, and hospitals.',
    apps: [
      { name: 'Hotelier Hub', description: 'Complete property management system for hotels, resorts, and vacation rentals.', icon: <HotelierHubIcon/> },
      { name: 'EduManage', description: 'A powerful School Management System for academic institutions of all sizes.', icon: <EduManageIcon/> },
      { name: 'Clinic OS', description: 'An integrated system for patient management, appointment scheduling, and electronic health records.', icon: <ClinicOsIcon/> },
      { name: 'GovPortal', description: 'A secure and accessible digital platform for government services and citizen engagement.', icon: <GovPortalIcon/> },
    ],
  },
  {
    icon: <FinanceIcon />, title: 'Finance & Blockchain', color: '#f1c40f',
    description: 'Secure banking, crypto wallets, and decentralized applications.',
    apps: [
      { name: 'SecureBank', description: 'A modern, secure, and scalable core banking platform for financial institutions.', icon: <SecureBankIcon/> },
      { name: 'CryptoWallet', description: 'A non-custodial wallet for securely managing cryptocurrencies and NFTs across multiple blockchains.', icon: <CryptoWalletIcon/> },
      { name: 'DeFi Dashboard', description: 'Track your decentralized finance portfolio, discover new opportunities, and manage assets in one place.', icon: <DeFiDashboardIcon/> },
      { name: 'LedgerGuard', description: 'A blockchain-based solution for immutable record-keeping and data verification.', icon: <LedgerGuardIcon/> },
    ],
  },
  {
    icon: <RetailIcon />, title: 'Retail & Commerce', color: '#e74c3c',
    description: 'Integrated systems for restaurants, boutiques, and e-commerce.',
    apps: [
      { name: 'Point of Sale', description: 'An intuitive POS system for seamless transactions, inventory management, and sales analytics.', icon: <PointOfSaleIcon/> },
      { name: 'Inventory Sync', description: 'Automate inventory tracking across all your sales channels in real-time.', icon: <InventorySyncIcon/> },
      { name: 'E-commerce Kit', description: 'Everything you need to build and manage a powerful online store.', icon: <ECommerceKitIcon/> },
      { name: 'Restaurant OS', description: 'A complete management system for restaurants, from order taking to kitchen management and billing.', icon: <RestaurantOsIcon/> },
    ],
  },
  {
    icon: <DevToolsIcon />, title: 'Developer Hub', color: '#9b59b6',
    description: 'A marketplace of tools, APIs, and services for software development.',
    apps: [
      { name: 'API Gateway', description: 'Manage, secure, and scale your APIs with a robust and reliable gateway solution.', icon: <ApiGatewayIcon/> },
      { name: 'Code Runner', description: 'An online IDE and execution environment for testing code snippets in various languages.', icon: <CodeRunnerIcon/>, launchable: true },
      { name: 'DB Manager', description: 'A universal database tool for developers, DBAs, and data analysts.', icon: <DbManagerIcon/>, launchable: true },
      { name: 'CI/CD Pipeline', description: 'Automate your build, test, and deployment pipeline for faster and more reliable software delivery.', icon: <CiCdPipelineIcon/> },
      { name: 'Dependency Manager', description: 'Track, manage, and audit project dependencies to ensure security and compatibility.', icon: <DependencyManagerIcon/> },
    ],
  },
    {
    icon: <AiIcon />, title: 'AI / Machine Learning', color: '#34495e',
    description: 'Harness the power of AI with tools for data analysis, model training, and automation.',
    apps: [
      { name: 'Data Insight', description: 'Analyze large datasets, identify trends, and generate actionable insights using machine learning.', icon: <DataInsightIcon/> },
      { name: 'Model Studio', description: 'A collaborative environment for building, training, and deploying machine learning models.', icon: <ModelStudioIcon/> },
      { name: 'Automation Engine', description: 'Create intelligent workflows and automate complex business processes with AI agents.', icon: <AutomationEngineIcon/> },
      { name: 'Cognitive Services', description: 'Integrate advanced AI capabilities like vision, speech, and language understanding into your apps.', icon: <CognitiveServicesIcon/> },
    ],
  },
  {
    icon: <MarketplaceIcon />, title: 'Marketplace & Add-ons', color: '#1abc9c',
    description: "A central hub for discovering plugins, themes, and integrations to extend the platform's functionality.",
    apps: [
      { name: 'Plugin Marketplace', description: 'Discover and install third-party plugins to add new features and capabilities to your applications.', icon: <PluginMarketplaceIcon/>, launchable: true },
      { name: 'Theme Store', description: 'Browse and apply professionally designed themes to customize the look and feel of your user interface.', icon: <ThemeStoreIcon/> },
      { name: 'Integration Directory', description: 'Connect your aenzbi apps with the other services you use, from CRMs to cloud storage providers.', icon: <IntegrationDirectoryIcon/> },
      { name: 'Module Builder', description: 'A developer-focused tool for creating, testing, and publishing your own modules and add-ons to the marketplace.', icon: <ModuleBuilderIcon/> },
    ],
  },
  {
    icon: <CommunityIcon />, title: 'Community & Utilities', color: '#00bcd4',
    description: 'Engage with the community and access a suite of practical, everyday utility tools.',
    apps: [
        { name: 'Forum Fusion', description: 'A modern, feature-rich forum for community discussions, support, and collaboration.', icon: <ForumFusionIcon /> },
        { name: 'Knowledge Base', description: 'Create, organize, and share documentation, tutorials, and best practices with a powerful knowledge base.', icon: <KnowledgeBaseIcon /> },
        { name: 'Feedback Flow', description: 'Collect, manage, and act on user feedback to build better products and services.', icon: <FeedbackFlowIcon /> },
        { name: 'URL Shortener', description: 'A quick and easy tool to shorten long URLs for easy sharing, with tracking and history.', icon: <UrlShortenerIcon />, launchable: true },
    ],
  },
];


// --- Components ---
interface SuiteCardProps extends Suite {
  onExplore: () => void;
}

const SuiteCard: React.FC<SuiteCardProps> = ({ icon, title, description, color, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);
  const style: { [key: string]: React.CSSProperties } = {
    card: { backgroundColor: '#1E1E1E', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid #2a2a2a', transition: 'transform 0.3s ease, box-shadow 0.3s ease', transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', boxShadow: isHovered ? `0 10px 20px rgba(0,0,0,0.2), 0 0 15px ${color}40` : 'none' },
    iconContainer: { color: color, marginBottom: '10px' },
    title: { fontSize: '1.4rem', fontWeight: 600, margin: 0, color: '#FFFFFF' },
    description: { fontSize: '1rem', color: '#a0a0a0', lineHeight: 1.6, margin: 0, flexGrow: 1 },
    button: { backgroundColor: isHovered ? color : `${color}cc`, color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', marginTop: 'auto', transition: 'background-color 0.3s ease', alignSelf: 'flex-start' }
  };
  return (
    <div style={style.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} role="article" aria-labelledby={`card-title-${title.replace(/\s/g, '-')}`}>
      <div style={style.iconContainer}>{icon}</div>
      <h3 id={`card-title-${title.replace(/\s/g, '-')}`} style={style.title}>{title}</h3>
      <p style={style.description}>{description}</p>
      <button style={style.button} onClick={onExplore}>Explore Suite</button>
    </div>
  );
};

interface AppModalProps {
  app: AppInfo;
  color: string;
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ app, color, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const styles = {
    header: { display: 'flex', alignItems: 'center', gap: '15px', color: color, marginBottom: '20px' },
    title: { fontSize: '1.8rem', fontWeight: 600, margin: 0, color: '#fff' },
    description: { color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 25px 0' },
    status: { background: `${color}30`, color: color, padding: '5px 12px', borderRadius: '15px', fontSize: '0.9rem', fontWeight: 500, display: 'inline-block' }
  };
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
        <header style={styles.header}>
          <span style={{color: color}}>{React.cloneElement(app.icon, { width: 40, height: 40 })}</span>
          <h2 style={styles.title}>{app.name}</h2>
        </header>
        <p style={styles.description}>{app.description}</p>
        <span style={styles.status}>Coming Soon</span>
      </div>
    </div>
  );
};

interface AppCardProps {
    app: AppInfo;
    color: string;
    onClick: () => void;
}
const AppCard: React.FC<AppCardProps> = ({ app, color, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const styles: {[key: string]: CSSProperties} = {
        card: {
            backgroundColor: '#1E1E1E', borderRadius: '12px', padding: '24px', border: '1px solid #2a2a2a',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', textAlign: 'center',
            color: '#a0a0a0', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: isHovered ? `0 8px 15px rgba(0,0,0,0.2), 0 0 10px ${color}30` : 'none',
        },
        title: { fontSize: '1.2rem', fontWeight: 600, color: '#fff', margin: 0 },
        icon: { color: color, marginBottom: '10px' }
    };
    return (
        <div style={styles.card} onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div style={styles.icon}>{React.cloneElement(app.icon, { width: 48, height: 48 })}</div>
            <h4 style={styles.title}>{app.name}</h4>
        </div>
    );
};

interface SuitePageProps {
  suite: Suite;
  onBack: () => void;
  onLaunchApp: (app: AppInfo) => void;
}

const SuitePage: React.FC<SuitePageProps> = ({ suite, onBack, onLaunchApp }) => {
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);

  const styles: { [key: string]: CSSProperties } = {
    page: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', width: '100%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' },
    header: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', color: suite.color },
    title: { fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: 0, color: '#fff' },
    backButton: { display: 'flex', alignItems: 'center', gap: '8px', background: '#2a2a2a', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.3s ease', position: 'absolute', top: '40px', left: '40px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', width: '100%' },
  };

  const handleAppClick = (app: AppInfo) => {
      if(app.launchable) {
          onLaunchApp(app);
      } else {
          setSelectedApp(app);
      }
  };

  return (
    <div style={styles.page}>
      <button style={styles.backButton} onClick={onBack} aria-label="Back to platform dashboard">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
        Back to Platform
      </button>
      <header style={styles.header}>
        <span style={{color: suite.color}}>{React.cloneElement(suite.icon, { width: 60, height: 60 })}</span>
        <h1 style={styles.title}>{suite.title}</h1>
      </header>
      <p style={{color: '#a0a0a0', fontSize: '1.1rem', textAlign: 'center', maxWidth: '600px', marginBottom: '60px'}}>
        Explore the applications within the {suite.title} suite. Click on an application to learn more or launch it.
      </p>
      <div style={styles.grid}>
        {suite.apps.map(app => (
          <AppCard key={app.name} app={app} color={suite.color} onClick={() => handleAppClick(app)} />
        ))}
      </div>
      {selectedApp && <AppModal app={selectedApp} color={suite.color} onClose={() => setSelectedApp(null)} />}
    </div>
  );
};

// --- LAUNCHABLE APPS ---

// 1. Plugin Marketplace
interface Plugin {
    name: string;
    description: string;
    category: string;
    icon: React.ReactElement<IconProps>;
}
const plugins: Plugin[] = [
    { name: 'AI Enhancer', description: 'Leverage AI to automate tasks, generate content, and gain insights from your data.', category: 'AI/ML', icon: <AiEnhancerIcon/> },
    { name: 'Advanced Analytics', description: 'Unlock deep insights with customizable dashboards and real-time data visualization.', category: 'Analytics', icon: <AnalyticsIcon/> },
    { name: 'SEO Toolkit', description: 'Improve your search engine ranking with our suite of powerful SEO analysis and optimization tools.', category: 'Marketing', icon: <SeoToolsIcon/> },
    { name: 'CMS Connect', description: 'Seamlessly integrate with popular Content Management Systems like WordPress and Drupal.', category: 'Integration', icon: <CmsConnectIcon/> },
    { name: 'Social Hub', description: 'Connect and manage all your social media accounts from a single, unified dashboard.', category: 'Social', icon: <SocialHubIcon/> },
    { name: 'Payment Gateway Pro', description: 'Integrate with major payment providers like Stripe and PayPal for secure transactions.', category: 'Finance', icon: <PaymentGatewayIcon/> },
];

const PluginMarketplacePage: React.FC<{ suite: Suite, onBack: () => void }> = ({ suite, onBack }) => {
    const [installedPlugins, setInstalledPlugins] = useState<string[]>([]);
    const handleInstall = (pluginName: string) => {
        setInstalledPlugins(prev => [...prev, pluginName]);
    };

    return (
        <div className="app-page-container">
            <div className="app-page-header">
                <div className="app-page-title-group">
                    <span style={{ color: suite.color }}><PluginMarketplaceIcon width={48} height={48} /></span>
                    <h1 className="app-page-title">Plugin Marketplace</h1>
                </div>
                <button className="back-button" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                    Back to Suite
                </button>
            </div>
            <p className="app-page-description">
                Discover and install third-party plugins to add new features and capabilities to your applications.
            </p>
            <div className="marketplace-controls">
                <input type="text" placeholder="Search plugins..." className="marketplace-search" />
                <button className="marketplace-filter-btn active">All</button>
                <button className="marketplace-filter-btn">Popular</button>
                <button className="marketplace-filter-btn">New</button>
            </div>
            <div className="plugin-grid">
                {plugins.map(plugin => (
                    <div className="plugin-card" key={plugin.name}>
                        <div className="plugin-card-header">
                            <span style={{color: suite.color}}>{React.cloneElement(plugin.icon, {width: 32, height: 32})}</span>
                            <h3 className="plugin-card-title">{plugin.name}</h3>
                        </div>
                        <p className="plugin-card-description">{plugin.description}</p>
                        <div className="plugin-card-footer">
                            <span className="plugin-card-category">{plugin.category}</span>
                            <button 
                                className={`install-btn ${installedPlugins.includes(plugin.name) ? 'installed' : 'install'}`}
                                onClick={() => !installedPlugins.includes(plugin.name) && handleInstall(plugin.name)}
                            >
                                {installedPlugins.includes(plugin.name) ? 'Installed' : 'Install'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 2. Code Runner
const CodeRunnerPage: React.FC<{ suite: Suite, onBack: () => void }> = ({ suite, onBack }) => {
    const defaultCode = `// Welcome to the aenzbi Code Runner!
// You can execute any JavaScript code here.

function greet(name) {
    return \`Hello, \${name}!\`;
}

const result = greet('Developer');
console.log(result);

// Try calculating something
console.log('2 + 2 =', 2 + 2);

// The final expression is returned automatically
new Date().toLocaleTimeString();
`;
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState<{ text: string, type: 'log' | 'error' }>({ text: 'Click "Run Code" to see the output.', type: 'log' });

    const handleRunCode = () => {
        const logs: string[] = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
            logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg.toString()).join(' '));
        };

        try {
            const result = new Function(code)();
            let resultOutput = logs.join('\n');
            if (result !== undefined) {
                resultOutput += `\n\n// Return Value:\n${JSON.stringify(result, null, 2)}`;
            }
            setOutput({ text: resultOutput || 'Code executed successfully with no output.', type: 'log' });
        } catch (error) {
            let errorMessage = (error as Error).toString();
            setOutput({ text: `// Error:\n${errorMessage}`, type: 'error' });
        } finally {
            console.log = originalConsoleLog;
        }
    };

    return (
        <div className="app-page-container">
            <div className="app-page-header">
                <div className="app-page-title-group">
                    <span style={{ color: suite.color }}><CodeRunnerIcon width={48} height={48} /></span>
                    <h1 className="app-page-title">Code Runner</h1>
                </div>
                <button className="back-button" onClick={onBack}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
                    Back to Suite
                </button>
            </div>
            <div className="code-runner-layout">
                <div className="code-panel">
                    <div className="panel-header">
                        <h2 className="panel-title">JavaScript Editor</h2>
                        <button className="run-button" onClick={handleRunCode}>
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                           Run Code
                        </button>
                    </div>
                    <textarea 
                        className="code-editor"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                        aria-label="JavaScript Code Editor"
                    />
                </div>
                <div className="code-panel">
                     <h2 className="panel-title">Console Output</h2>
                     <pre className={`output-console ${output.type === 'error' ? 'error' : ''}`} aria-live="polite">
                        {output.text}
                     </pre>
                </div>
            </div>
        </div>
    );
};

// 3. DB Manager
const DbManagerPage: React.FC<{ suite: Suite, onBack: () => void }> = ({ suite, onBack }) => {
    const [tables, setTables] = useState<string[]>([]);
    const [selectedTable, setSelectedTable] = useState<string | null>(null);
    const [tableData, setTableData] = useState<string>('');
    const [newTableName, setNewTableName] = useState('');

    const refreshTables = () => {
        const keys = Object.keys(localStorage).filter(k => k.startsWith('aenzbi_db_'));
        setTables(keys.map(k => k.replace('aenzbi_db_', '')));
    };

    useEffect(() => {
        refreshTables();
    }, []);

    useEffect(() => {
        if (selectedTable) {
            try {
                const data = localStorage.getItem(`aenzbi_db_${selectedTable}`);
                setTableData(JSON.stringify(JSON.parse(data || '[]'), null, 2));
            } catch {
                setTableData('[]');
            }
        } else {
            setTableData('');
        }
    }, [selectedTable]);

    const handleCreateTable = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTableName && !tables.includes(newTableName)) {
            localStorage.setItem(`aenzbi_db_${newTableName}`, '[]');
            setNewTableName('');
            refreshTables();
            setSelectedTable(newTableName);
        }
    };

    const handleDeleteTable = (tableName: string) => {
        if (window.confirm(`Are you sure you want to delete the table "${tableName}"?`)) {
            localStorage.removeItem(`aenzbi_db_${tableName}`);
            if (selectedTable === tableName) setSelectedTable(null);
            refreshTables();
        }
    };
    
    const handleSaveData = () => {
        if (!selectedTable) return;
        try {
            const parsedData = JSON.parse(tableData);
            localStorage.setItem(`aenzbi_db_${selectedTable}`, JSON.stringify(parsedData));
            alert('Data saved successfully!');
        } catch (error) {
            alert('Invalid JSON format. Please correct it before saving.');
        }
    };

    return (
        <div className="app-page-container">
            <div className="app-page-header">
                <div className="app-page-title-group">
                    <span style={{ color: suite.color }}><DbManagerIcon width={48} height={48} /></span>
                    <h1 className="app-page-title">DB Manager</h1>
                </div>
                <button className="back-button" onClick={onBack}>Back to Suite</button>
            </div>
            <div className="db-manager-layout">
                <div className="db-panel">
                    <h2 className="db-panel-title">Tables</h2>
                    <ul className="db-table-list">
                        {tables.map(table => (
                            <li key={table} onClick={() => setSelectedTable(table)} className={selectedTable === table ? 'active' : ''}>
                                <span>{table}</span>
                                <button className="db-delete-btn" onClick={(e) => { e.stopPropagation(); handleDeleteTable(table); }}>&times;</button>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleCreateTable} className="db-new-table-form">
                        <input type="text" value={newTableName} onChange={e => setNewTableName(e.target.value)} placeholder="New table name..." className="db-input"/>
                        <button type="submit" className="db-button">+</button>
                    </form>
                </div>
                <div className="db-panel">
                    <h2 className="db-panel-title">Data Viewer</h2>
                    <pre className="db-data-viewer">{selectedTable ? tableData : 'Select a table to view its data.'}</pre>
                </div>
                <div className="db-panel">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <h2 className="db-panel-title">JSON Editor</h2>
                      <button className="db-button" onClick={handleSaveData} disabled={!selectedTable}>Save</button>
                    </div>
                    <textarea className="db-data-editor" value={tableData} onChange={e => setTableData(e.target.value)} disabled={!selectedTable} placeholder="Select a table to edit its data."></textarea>
                </div>
            </div>
        </div>
    );
};

// 4. URL Shortener
const UrlShortenerPage: React.FC<{ suite: Suite, onBack: () => void }> = ({ suite, onBack }) => {
    type ShortenedLink = { longUrl: string; shortUrl: string };
    const [longUrl, setLongUrl] = useState('');
    const [history, setHistory] = useState<ShortenedLink[]>([]);
    const [lastResult, setLastResult] = useState<ShortenedLink | null>(null);
    const [copyText, setCopyText] = useState('Copy');
    
    useEffect(() => {
        const storedHistory = localStorage.getItem('aenzbi_shortener_history');
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    const handleShorten = (e: React.FormEvent) => {
        e.preventDefault();
        if (!longUrl) return;
        const shortCode = Math.random().toString(36).substring(2, 8);
        const newLink = { longUrl, shortUrl: `aenz.bi/${shortCode}` };
        
        const updatedHistory = [newLink, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('aenzbi_shortener_history', JSON.stringify(updatedHistory));
        
        setLastResult(newLink);
        setLongUrl('');
        setCopyText('Copy');
    };

    const handleCopy = () => {
        if (!lastResult) return;
        navigator.clipboard.writeText(lastResult.shortUrl);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy'), 2000);
    };

    return (
        <div className="app-page-container">
            <div className="app-page-header">
                <div className="app-page-title-group">
                    <span style={{ color: suite.color }}><UrlShortenerIcon width={48} height={48} /></span>
                    <h1 className="app-page-title">URL Shortener</h1>
                </div>
                <button className="back-button" onClick={onBack}>Back to Suite</button>
            </div>
            <div className="url-shortener-container">
                <form className="shortener-form" onSubmit={handleShorten}>
                    <input 
                        type="url" 
                        className="shortener-input"
                        placeholder="Enter a long URL to shorten..."
                        value={longUrl}
                        onChange={e => setLongUrl(e.target.value)}
                        required
                    />
                    <button type="submit" className="shortener-button">Shorten</button>
                </form>
                
                {lastResult && (
                    <div className="shortener-result-box">
                        <span className="short-link">{lastResult.shortUrl}</span>
                        <button className="copy-button" onClick={handleCopy}>{copyText}</button>
                    </div>
                )}

                {history.length > 0 && (
                    <div>
                        <h2 className="history-title">History</h2>
                        <ul className="history-list">
                            {history.map((item, index) => (
                                <li key={index} className="history-item">
                                    <span className="history-long-url">{item.longUrl}</span>
                                    <span className="history-short-url">{item.shortUrl}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};


// --- Main App Component ---
type View = 
    | { name: 'dashboard' }
    | { name: 'suite'; suite: Suite }
    | { name: 'app'; app: AppInfo; suite: Suite };

const App = () => {
  const [view, setView] = useState<View>({ name: 'dashboard' });

  const handleExplore = (suite: Suite) => setView({ name: 'suite', suite });
  const handleLaunchApp = (app: AppInfo, suite: Suite) => setView({ name: 'app', app, suite });
  const handleBackToDashboard = () => setView({ name: 'dashboard' });
  const handleBackToSuite = (suite: Suite) => setView({ name: 'suite', suite });

  const styles: { [key: string]: React.CSSProperties } = {
    main: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', width: '100%', boxSizing: 'border-box' },
    header: { textAlign: 'center', marginBottom: '60px' },
    title: { fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700, margin: '0 0 10px 0', background: 'linear-gradient(90deg, #6A5ACD, #00BFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    subtitle: { fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#a0a0a0', maxWidth: '600px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', width: '100%', maxWidth: '1400px' },
    viewContainer: { width: '100%', transition: 'opacity 0.3s ease-in-out' }
  };

  const renderView = () => {
      switch (view.name) {
          case 'suite':
              return <SuitePage suite={view.suite} onBack={handleBackToDashboard} onLaunchApp={(app) => handleLaunchApp(app, view.suite)} />;
          case 'app':
              if (view.app.name === 'Plugin Marketplace') {
                  return <PluginMarketplacePage suite={view.suite} onBack={() => handleBackToSuite(view.suite)} />;
              }
              if (view.app.name === 'Code Runner') {
                  return <CodeRunnerPage suite={view.suite} onBack={() => handleBackToSuite(view.suite)} />;
              }
              if (view.app.name === 'DB Manager') {
                  return <DbManagerPage suite={view.suite} onBack={() => handleBackToSuite(view.suite)} />;
              }
              if (view.app.name === 'URL Shortener') {
                  return <UrlShortenerPage suite={view.suite} onBack={() => handleBackToSuite(view.suite)} />;
              }
              // Fallback for any other launchable apps not yet implemented
              return <SuitePage suite={view.suite} onBack={handleBackToDashboard} onLaunchApp={(app) => handleLaunchApp(app, view.suite)} />;
          case 'dashboard':
          default:
              return (
                  <>
                      <header style={styles.header}>
                          <h1 style={styles.title}>aenzbi</h1>
                          <p style={styles.subtitle}>
                              A unified suite of intelligent applications designed to power modern industries. From enterprise to boutique, discover tools that drive efficiency and innovation.
                          </p>
                      </header>
                      <div style={styles.grid}>
                          {appSuites.map((suite, index) => (
                              <SuiteCard key={index} {...suite} onExplore={() => handleExplore(suite)} />
                          ))}
                      </div>
                  </>
              );
      }
  };

  return (
    <main style={styles.main}>
       <div style={{ ...styles.viewContainer, opacity: 1 }}>
            {renderView()}
       </div>
    </main>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}