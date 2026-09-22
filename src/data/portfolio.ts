import type { Achievement, Article, Certification, Experience, Project, SkillCategory } from '../types';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Insights', href: '#insights' },
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
    title: 'Enterprise Ingestion Framework',
    description: 'Designed a Synapse-based enterprise ingestion framework integrating Oracle, SQL Server, MongoDB, Kafka, and JSON sources.',
    icon: 'database',
  },
  {
    title: 'GenAI Sales Enablement',
    description: 'Developed an Azure OpenAI GPT-4o sales enablement solution that reduced content-generation effort.',
    icon: 'shield',
  },
  {
    title: 'Enterprise Cloud Migration',
    description: 'Led the migration of on-premises Apache NiFi workloads to Azure with a focus on continuity and operational readiness.',
    icon: 'route',
  },
  {
    title: 'Real-Time Data Architecture',
    description: 'Built Kafka and Databricks streaming architecture supporting scalable real-time analytics.',
    icon: 'cloud',
  },
  {
    title: 'Databricks Optimization',
    description: 'Optimized Databricks pipelines using Delta Live Tables and advanced Apache Spark techniques.',
    icon: 'layers',
  },
  {
    title: 'Global Engineering Leadership',
    description: 'Led offshore data engineering teams delivering dependable enterprise-scale solutions.',
    icon: 'users',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud',
    skills: [
      { name: 'Azure', level: 95 },
      { name: 'AWS', level: 82 },
    ],
  },
  {
    title: 'Data Platforms',
    skills: [
      { name: 'Azure Databricks', level: 94 },
      { name: 'Azure Synapse', level: 92 },
      { name: 'Azure Data Factory', level: 93 },
      { name: 'Hadoop · Hive · HBase', level: 86 },
      { name: 'Kafka', level: 89 },
    ],
  },
  {
    title: 'Programming & Databases',
    skills: [
      { name: 'Python', level: 91 },
      { name: 'SQL', level: 95 },
      { name: 'Unix Shell', level: 87 },
      { name: 'Oracle · MongoDB · HBase', level: 89 },
    ],
  },
  {
    title: 'DevOps, Observability & AI',
    skills: [
      { name: 'GitHub · Azure DevOps · Jenkins', level: 88 },
      { name: 'Log Analytics · Splunk · Kibana', level: 86 },
      { name: 'Azure OpenAI · GenAI', level: 84 },
      { name: 'Pandas · NumPy', level: 87 },
    ],
  },
];

export const radarSkills = [
  { subject: 'Cloud', value: 94 },
  { subject: 'Lakehouse', value: 93 },
  { subject: 'Engineering', value: 94 },
  { subject: 'Governance', value: 90 },
  { subject: 'Leadership', value: 90 },
  { subject: 'GenAI', value: 78 },
];

export const experiences: Experience[] = [
  {
    company: 'Manulife',
    role: 'Senior Data Engineer',
    period: '2018–Present',
    location: 'Hong Kong',
    summary: 'Leading enterprise data platform modernization and engineering delivery in the insurance domain.',
    highlights: ['Synapse-based multi-source ingestion framework', 'Kafka and Databricks real-time analytics', 'Azure OpenAI GPT-4o innovation', 'Cloud migration and offshore team leadership'],
    color: '#00A758',
  },
  {
    company: 'Larsen & Toubro',
    role: 'Senior Software Engineer',
    summary: 'Large-scale technology delivery spanning data integration and modernization.',
    highlights: ['Enterprise integration', 'Cloud transformation', 'Delivery collaboration'],
    color: '#0078D4',
  },
  {
    company: 'Infosys',
    role: 'Technology Lead',
    summary: 'Consulting-led delivery for enterprise data platforms and transformation programs.',
    highlights: ['Data platform delivery', 'Client partnership', 'Engineering standards'],
    color: '#5B4BCE',
  },
  {
    company: 'Capgemini',
    role: 'Technology Consultant',
    summary: 'Data and integration engineering within global technology consulting engagements.',
    highlights: ['Solution delivery', 'Data integration', 'Cross-functional execution'],
    color: '#12B8A6',
  },
  {
    company: 'Zensar Technologies',
    role: 'Software Engineer',
    summary: 'Foundational engineering experience across enterprise software and data systems.',
    highlights: ['Software engineering', 'Data systems', 'Delivery foundations'],
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
    title: 'Azure Migration Accelerator',
    eyebrow: 'Cloud modernization',
    summary: 'A repeatable delivery pattern for moving on-premises data workloads to a governed Azure data platform.',
    challenge: 'Increase migration velocity without compromising reconciliation, security, continuity, or supportability.',
    approach: 'Use migration waves, reusable ADF patterns, Synapse landing zones, Databricks transformations, and validation gates.',
    architecture: ['Assess workloads', 'ADF migration', 'Databricks transform', 'Synapse validate'],
    technologies: ['ADF', 'Synapse', 'Databricks'],
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

export const articles: Article[] = [
  {
    title: 'Building Metadata Driven Data Platforms',
    category: 'Data Architecture',
    excerpt: 'How metadata, reusable orchestration, and common controls can turn source onboarding into a scalable platform capability.',
  },
  {
    title: 'Databricks Optimization Techniques',
    category: 'Databricks',
    excerpt: 'Practical techniques for improving Spark execution, Delta Lake layout, streaming reliability, and pipeline efficiency.',
  },
  {
    title: 'Designing Enterprise Data Lakes',
    category: 'Cloud Architecture',
    excerpt: 'Design principles for secure, governed, observable data lakes that serve multiple enterprise workloads.',
  },
  {
    title: 'Lessons Learned from Cloud Migration',
    category: 'Cloud Migration',
    excerpt: 'Lessons from planning migration waves, validating workloads, managing cutover risk, and preparing teams for operations.',
  },
  {
    title: 'Generative AI for Enterprise Data Teams',
    category: 'Generative AI',
    excerpt: 'Practical ways governed prompting, grounding, evaluation, and human review can improve enterprise data workflows.',
  },
];
