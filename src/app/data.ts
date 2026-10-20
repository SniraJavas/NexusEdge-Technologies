export const COMPANY = {
  name: 'Nexus Edge Technologies', short: 'Nexus Edge',
  email: 'info@nexusedgetech.co.za', phones: ['067 179 1758', '062 264 7069'],
  offices: ['Pretoria, Gauteng', 'East London, Eastern Cape']
};

export interface Pillar { id: string; title: string; blurb: string; items: string[]; x: number; y: number; }
export const PILLARS: Pillar[] = [
  { id: 'software', title: 'Software & Mobile Apps', x: 110, y: 90,
    blurb: 'Web platforms, business systems and native or cross-platform mobile apps, from requirements through deployment and support.',
    items: ['Web platforms & business systems', 'React Native & cross-platform apps', 'APIs, Azure deployment, SQL reporting'] },
  { id: 'gadgets', title: 'Gadget Supply', x: 490, y: 90,
    blurb: 'Laptops, tablets, networking and classroom or office technology, sourced, configured and delivered for startups and schools.',
    items: ['Laptops & tablets', 'Networking equipment', 'Classroom & office technology'] },
  { id: 'websites', title: 'Website Support', x: 110, y: 310,
    blurb: 'We fix broken, slow, insecure or outdated business websites, then keep them healthy without you needing an in-house developer.',
    items: ['Fixes & performance tuning', 'Security updates', 'Hosting & ongoing maintenance'] },
  { id: 'gov', title: 'Government Tech Advisory', x: 490, y: 310,
    blurb: 'Help for public sector entities to strengthen, modernise and maintain their systems, in any department or sphere of government.',
    items: ['System modernisation', 'Procurement-aware delivery', 'Controlled release pipelines'] }
];

export const PROJECTS = [
  { client: 'National Treasury: Central Supplier Database', period: 'Aug 2024 – Aug 2025', sector: 'Government', scope: 'Supplier registration and vetting for public sector tenders: feature development, SQL reporting, Azure release pipelines.', tech: 'C#, .NET Core, SQL Server, Azure' },
  { client: 'MultiChoice Group: Amber App', period: 'Sep 2025 – Jul 2026', sector: 'Corporate', scope: 'Internal system for DStv client contracts, subscriptions, payments, inventory and product listings.', tech: 'Ember.js, Enterprise SDLC' },
  { client: 'Genii Analytics AI: Engagement AI', period: 'Jun 2022 – Apr 2024', sector: 'Startup', scope: 'AI SaaS platform assisting call-centre agents in real time, with manager and marketing dashboards.', tech: 'Azure AI, C#, MVC.NET' },
  { client: 'BidVest (via Mfundopedia): Credit System', period: 'Jan 2022 – Jun 2022', sector: 'Corporate', scope: 'Lending platform enforcing borrowing rules, repayment monitoring and delinquent account management.', tech: 'C#, .NET MVC, Laravel' },
  { client: 'DataOrbis: Logistics SaaS', period: 'Jun 2021 – Dec 2021', sector: 'Startup', scope: 'Pan-African route-planning analytics; led the Angular 1 to Angular 12 front-end migration.', tech: 'Angular, Azure, Swagger' },
  { client: 'Affinity / Senwel Konsult: Claims & Workshop Finder', period: 'Sep 2020 – Jun 2021', sector: 'Corporate', scope: 'Multi-broker insurance claims integration and a GPS mobile app for approved repair workshops.', tech: 'React Native, MongoDB, Azure Service Bus' },
  { client: 'Retro Rabbits: Yuzzu, Nissan, Know Your Nation', period: 'Jan 2019 – Apr 2020', sector: 'Agency', scope: 'Insurance rules engine, website maintenance and a children’s app teaching South African history.', tech: 'ReactJS, .NET, Django' },
  { client: 'Western Cape Dept. of Education: Progress Tracker', period: 'Jan 2018 – Dec 2018', sector: 'Government', scope: 'Tracks school progress patterns to identify pass-rate and drop-out trends.', tech: 'C#, SQL Server, SSRS' }
];

// Update status as documents are issued. Used by the Tenders page.
export const COMPLIANCE = [
  { item: 'CIPC registration (Pty) Ltd', status: 'Pending', note: 'Number to be added on registration' },
  { item: 'B-BBEE: 100% Black-owned, Level 1 via sworn EME affidavit', status: 'Pending', note: 'Issued on registration; confirm with a B-BBEE practitioner' },
  { item: 'VAT registration', status: 'Pending', note: 'Not yet registered' },
  { item: 'Central Supplier Database (CSD) registration', status: 'Pending', note: 'Required for all government tenders' },
  { item: 'Tax compliance status (SARS)', status: 'Pending', note: 'Add PIN / report once available' },
  { item: 'Company profile', status: 'Ready', note: 'Download from this site' }
];
