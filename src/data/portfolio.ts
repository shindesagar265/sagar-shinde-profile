import type { Achievement, Certification, CommunityHighlight, Experience, Project, SkillCategory } from '../types';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Selected work', href: '#projects' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
] as const;

export const profile = {
  name: 'Sagar Shinde',
  title: 'Senior Data Engineer',
  location: 'Hong Kong',
  email: 'shindesagar265@gmail.com',
  linkedin: 'https://linkedin.com/in/sagar-shinde-095a6117/',
  github: 'https://github.com/shindesagar265',
  medium: 'https://medium.com/@Shindesagar265',
  credly: 'https://www.credly.com/users/sagar-shinde.56091bcc',
  substack: 'https://substack.com/@sagarshinde265',
  resume: './Sagar-Shinde-CV.pdf',
  resumeUpdated: 'September 2026',
  photo: './sagar-shinde-profile.jpg',
} as const;

export const achievements: Achievement[] = [
  {
    title: 'Regional Data Delivery',
    description: 'Delivered Hong Kong, Japan, and global PySpark/SQL pipelines with a REST API trigger and zero critical defects.',
    icon: 'database',
  },
  {
    title: 'GenAI Sales Enablement',
    description: 'Built an Azure OpenAI GPT-4o sales enablement solution that reduced manual content-generation time by 60%.',
    icon: 'shield',
  },
  {
    title: 'Governed Data Engineering Assistant',
    description: 'Developed an assistant for onboarding, metadata health, pipeline-run support, repository workflows, and code review with approval gates.',
    icon: 'layers',
  },
  {
    title: 'Real-Time Data Architecture',
    description: 'Designed and delivered the MM UIP CDC streaming architecture, recorded as the first streaming solution to go live without issues.',
    icon: 'cloud',
  },
  {
    title: 'Cloud Platform Modernization',
    description: 'Migrated on-premises NiFi workflows to Azure and improved integration uptime to 99.9%.',
    icon: 'route',
  },
  {
    title: 'Engineering Leadership',
    description: 'Led a four-person engineering team, coached peers through reviews, and enabled Copilot-assisted code review in CI.',
    icon: 'users',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    skills: ['Azure', 'AWS', 'Azure Data Factory', 'Azure Synapse', 'ADLS'],
  },
  {
    title: 'Lakehouse & Streaming',
    skills: ['Azure Databricks', 'Delta Lake', 'Delta Live Tables', 'Kafka', 'Structured Streaming'],
  },
  {
    title: 'Engineering & Data',
    skills: ['Python', 'PySpark', 'SQL', 'Oracle', 'SQL Server', 'MongoDB', 'Hadoop', 'Hive', 'HBase'],
  },
  {
    title: 'Delivery, Governance & AI',
    skills: ['GitHub', 'GitHub Copilot', 'Jenkins', 'Azure DevOps', 'Azure OpenAI', 'Log Analytics', 'Splunk', 'Kibana', 'Power BI'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Manulife',
    role: 'Senior Data Engineer',
    period: 'Dec 2018–Present',
    location: 'Hong Kong',
    summary: 'Leading Azure data engineering across insurance, global integration, platform modernization, and engineering enablement.',
    highlights: [
      'Delivered Hong Kong, Japan, and global PySpark/SQL pipelines',
      'Developed a governed data engineering assistant',
      'Led cross-market Oracle connector migration and regression testing',
      'Delivered the first Asia sales-enablement GenAI MVP',
      'Led a four-person engineering team and coached peers',
    ],
    color: '#00A758',
  },
  {
    company: 'Larsen & Toubro',
    role: 'Senior Software Engineer',
    period: 'Aug 2017–Nov 2018',
    location: 'India',
    summary: 'Modernized large-scale data processing with reusable PySpark engineering patterns and enterprise ingestion standards.',
    highlights: ['5× faster SAS-to-PySpark processing', 'Terabyte-scale Spark optimization', 'Reusable ingestion modules', 'NiFi standardization POC'],
    color: '#0078D4',
  },
  {
    company: 'Infosys',
    role: 'Technology Lead',
    period: 'Nov 2015–Jul 2017',
    location: 'India',
    summary: 'Led insurance data engineering delivery across Hadoop archival, MongoDB transformation, and analytics enablement.',
    highlights: ['Built the DART archival framework', 'Enabled Power BI reporting', 'Led four developers'],
    color: '#5B4BCE',
  },
  {
    company: 'Capgemini',
    role: 'Technology Consultant',
    period: 'Dec 2013–Nov 2015',
    location: 'India',
    summary: 'Modernized mission-critical data warehouse workloads through SAS-to-Informatica migration and DB2 optimization.',
    highlights: ['Migrated mainframe SAS applications', 'Reduced batch windows by two hours', 'Optimized Informatica and DB2'],
    color: '#12B8A6',
  },
  {
    company: 'Zensar Technologies',
    role: 'Software Engineer',
    period: 'Jul 2010–Dec 2013',
    location: 'India',
    summary: 'Built foundational enterprise engineering experience supporting large-scale financial reporting and critical batch operations.',
    highlights: ['COBOL and JCL development', 'Financial reporting systems', '24/7 batch availability'],
    color: '#F59E0B',
  },
];

export const certifications: Certification[] = [
  {
    code: 'DP-203',
    title: 'Azure Data Engineer Associate',
    area: 'Microsoft Certified',
    description: 'Designing and implementing data storage, processing, and security on Microsoft Azure.',
  },
  {
    code: 'AI-102',
    title: 'Azure AI Engineer Associate',
    area: 'Microsoft Certified',
    description: 'Building, managing, and deploying AI solutions that use Azure AI services.',
  },
];

export const projects: Project[] = [
  {
    title: 'Metadata Driven Ingestion Framework',
    eyebrow: 'Enterprise ingestion',
    summary: 'A reusable, metadata-led platform pattern for onboarding heterogeneous enterprise sources with consistent controls.',
    challenge: 'Reduce source onboarding effort while preserving governance, observability, and repeatable processing standards.',
    approach: 'Drive ingestion behavior from metadata and reusable orchestration, transformation, validation, and audit components.',
    architecture: ['Source metadata', 'ADF orchestration', 'Databricks processing', 'Synapse serving'],
    technologies: ['ADF', 'Databricks', 'PySpark', 'Azure Synapse'],
  },
  {
    title: 'Governed Data Engineering Assistant',
    eyebrow: 'Engineering enablement',
    summary: 'An approval-gated assistant that helps engineers with repeatable data-platform and repository workflows.',
    challenge: 'Make common onboarding, metadata-health, pipeline-run, and code-review tasks easier to follow without bypassing governance.',
    approach: 'Guide users through scoped checks and repository actions, with explicit approval before write operations.',
    architecture: ['Engineer request', 'Context checks', 'Review guidance', 'Approved action'],
    technologies: ['Azure Data Factory', 'Azure Synapse', 'GitHub'],
  },
  {
    title: 'Regional Data Integration',
    eyebrow: 'Cross-market delivery',
    summary: 'Regional and global pipelines for Hong Kong and Japan, described without exposing internal source-system details.',
    challenge: 'Align schemas and data-quality expectations across regional teams and a shared global data lake.',
    approach: 'Build PySpark and SQL curation workflows and a REST API trigger for the master pipeline, with validation and stakeholder review.',
    architecture: ['Regional sources', 'PySpark/SQL curation', 'Master pipeline trigger', 'Global data lake'],
    technologies: ['PySpark', 'SQL', 'REST API', 'Azure'],
  },
  {
    title: 'GenAI Sales Enablement Platform',
    eyebrow: 'Applied enterprise AI',
    summary: 'An Azure OpenAI solution designed to accelerate the creation of relevant, high-quality sales enablement content.',
    challenge: 'Reduce repetitive content work while maintaining useful context, quality, and responsible human oversight.',
    approach: 'Combine structured context, governed prompting, GPT-4o generation, and review-ready output workflows.',
    architecture: ['Business context', 'Python orchestration', 'Azure OpenAI', 'Reviewed content'],
    technologies: ['Azure OpenAI', 'Python', 'GPT-4o'],
  },
  {
    title: 'Real Time Kafka Streaming Platform',
    eyebrow: 'Streaming analytics',
    summary: 'A scalable event-streaming architecture for turning Kafka topics into trusted near-real-time analytical data.',
    challenge: 'Process continuously arriving events with resilience, schema control, low latency, and reliable replay behavior.',
    approach: 'Use Kafka ingestion, Databricks Structured Streaming, checkpoints, and Delta Lake for durable incremental processing.',
    architecture: ['Event producers', 'Kafka', 'Databricks streaming', 'Delta Lake'],
    technologies: ['Kafka', 'Databricks', 'Delta Lake'],
  },
  {
    title: 'Data Quality Framework',
    eyebrow: 'Trusted data',
    summary: 'A configurable quality framework that makes validation rules, results, and remediation signals visible at scale.',
    challenge: 'Apply consistent quality controls across diverse datasets without embedding one-off checks in every pipeline.',
    approach: 'Represent reusable rules as configuration and execute distributed validations with transparent result publishing.',
    architecture: ['Rule configuration', 'PySpark validation', 'Quality results', 'Operational alerts'],
    technologies: ['PySpark', 'Databricks'],
  },
];

export const communityHighlights: CommunityHighlight[] = [
  {
    title: 'Code review as mentorship',
    description: 'Use practical review checklists and specific feedback to strengthen performance, scalability, security, and maintainability.',
  },
  {
    title: 'Knowledge shared across teams',
    description: 'Share GitHub Copilot and GenAI practices with Asia and global Data Engineering communities of practice.',
  },
  {
    title: 'Cross-functional delivery',
    description: 'Align data engineers, analysts, data scientists, architects, and regional stakeholders around schemas, quality, and delivery.',
  },
];
