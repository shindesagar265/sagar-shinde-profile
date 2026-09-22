import { lazy, Suspense, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDown,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Newspaper,
  Quote,
  QrCode,
  Route,
  ShieldCheck,
  Send,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react';
import { BackToTop } from './components/BackToTop';
import { ArchitectureStrip } from './components/ArchitectureStrip';
import { CloudVisual } from './components/CloudVisual';
import { Navigation } from './components/Navigation';
import { ProjectDialog } from './components/ProjectDialog';
import { Reveal } from './components/Reveal';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionHeading } from './components/SectionHeading';
import { achievements, articles, certifications, experiences, profile, projects, skillCategories } from './data/portfolio';
import { useTheme } from './hooks/useTheme';
import type { Project } from './types';

const SkillsChart = lazy(() => import('./components/SkillsChart'));

const achievementIcons: Record<string, LucideIcon> = {
  cloud: Cloud,
  database: Database,
  layers: Layers3,
  route: Route,
  shield: ShieldCheck,
  users: Users,
};

function App() {
  const { preference, cycleTheme } = useTheme();
  const [activeExperience, setActiveExperience] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="app-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <ScrollProgress />
      <Navigation theme={preference} onThemeChange={cycleTheme} />

      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-mesh" aria-hidden="true" />
          <div className="container-wide hero-grid">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="eyebrow"><Sparkles aria-hidden="true" size={15} />Engineering trusted data at enterprise scale</span>
              <h1 id="hero-title">Sagar Shinde</h1>
              <p className="hero-role">Senior Data Engineer <span aria-hidden="true">·</span> Hong Kong</p>
              <p className="hero-statement">Transforming enterprise data into <strong>scalable cloud platforms</strong> through Azure, Databricks, AI, and modern Data Engineering practices.</p>
              <p className="hero-tagline">Senior Data Engineer <span aria-hidden="true">|</span> Azure Architect <span aria-hidden="true">|</span> Databricks Specialist <span aria-hidden="true">|</span> GenAI Enthusiast</p>
              <div className="hero-actions">
                <a className="button" href="#projects"><Workflow aria-hidden="true" size={18} />Explore selected work<ArrowRight aria-hidden="true" size={16} /></a>
                <a className="button button-secondary" href={profile.resume} download><Download aria-hidden="true" size={18} />Download resume</a>
              </div>
              <div className="hero-meta">
                <span><MapPin aria-hidden="true" size={16} />Hong Kong · Open to global conversations</span>
                <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={16} />Start a conversation</a>
              </div>
              <nav className="profile-links" aria-label="Professional profiles">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={15} />LinkedIn</a>
                <a href={profile.medium} target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" size={15} />Medium</a>
                <a href={profile.substack} target="_blank" rel="noreferrer"><Send aria-hidden="true" size={15} />Substack</a>
                <a href={profile.credly} target="_blank" rel="noreferrer"><BadgeCheck aria-hidden="true" size={15} />Credly</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={15} />GitHub</a>
              </nav>
              <dl className="hero-impact" aria-label="Professional profile highlights">
                <div><dt>15+</dt><dd>Years of experience</dd></div>
                <div><dt>Azure + AWS</dt><dd>Cloud platforms</dd></div>
                <div><dt>Data + AI</dt><dd>Engineering focus</dd></div>
                <div><dt>Hong Kong</dt><dd>Global delivery</dd></div>
              </dl>
            </motion.div>
            <motion.div
              className="hero-art"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <CloudVisual photo={profile.photo} />
              <div className="status-pill"><span /> Available for impactful data challenges</div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown aria-hidden="true" size={18} />Discover the profile</a>
        </section>

        <section className="section-shell" id="about" aria-labelledby="about-title">
          <div className="container-wide about-grid">
            <Reveal>
              <SectionHeading eyebrow="Profile" title="Architecture thinking. Delivery discipline. Human leadership." description="A senior engineering perspective shaped by enterprise complexity, platform modernization, and the responsibility to make data genuinely useful." icon={BriefcaseBusiness} />
            </Reveal>
            <Reveal className="about-copy" delay={0.08}>
              <p className="lead-copy" id="about-title">I work at the intersection of <span>data architecture, cloud engineering, and delivery leadership</span>.</p>
              <p>Across more than fifteen years in technology, my focus has evolved from building dependable systems to shaping the engineering foundations that allow teams and organizations to move with confidence.</p>
              <p>My experience spans Azure and AWS, Databricks Medallion architecture, enterprise integration, cloud migration, insurance data, Master Data Management, data quality, and emerging Generative AI patterns. I value solutions that are technically sound, operationally honest, and easy for the next engineer to understand.</p>
              <blockquote><Quote aria-hidden="true" size={22} />The best data platform is not only scalable. It is trusted, explainable, and designed for the people who operate it.</blockquote>
            </Reveal>
          </div>
        </section>

        <section className="section-shell section-tinted" aria-labelledby="impact-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Core impact" title="Engineering outcomes that compound" description="Six connected areas where platform thinking and delivery experience create durable value." icon={Sparkles} align="center" /></Reveal>
            <div className="achievement-grid" id="impact-title">
              {achievements.map((achievement, index) => {
                const Icon = achievementIcons[achievement.icon];
                return (
                  <Reveal key={achievement.title} delay={index * 0.04}>
                    <motion.article className="glass-card achievement-card" whileHover={reduceMotion ? undefined : { y: -5 }}>
                      <span className="icon-tile"><Icon aria-hidden="true" size={22} /></span>
                      <span className="card-number">0{index + 1}</span>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell" id="skills" aria-labelledby="skills-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Capability map" title="Deep data expertise, connected end to end" description="A practical blend of platform architecture, hands-on engineering, enterprise data management, and technical leadership." icon={BrainCircuit} /></Reveal>
            <div className="skills-layout" id="skills-title">
              <div className="skills-cards">
                {skillCategories.map((category, categoryIndex) => (
                  <Reveal className="skill-card glass-card" key={category.title} delay={categoryIndex * 0.05}>
                    <h3><Code2 aria-hidden="true" size={18} />{category.title}</h3>
                    <ul>
                      {category.skills.map((skill) => (
                        <li key={skill.name}>
                          <span><strong>{skill.name}</strong><small>{skill.level}%</small></span>
                          <span className="skill-track" role="progressbar" aria-label={`${skill.name} self-assessed proficiency`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level}>
                            <motion.span initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.8 }} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
              <Reveal className="radar-card glass-card" delay={0.12}>
                <div className="card-kicker"><Network aria-hidden="true" size={17} />Capability balance</div>
                <h3>Engineering breadth with platform depth</h3>
                <p>A visual summary of complementary focus areas. Values are self-assessed and provided as directional context.</p>
                <Suspense fallback={<div className="chart-skeleton" aria-label="Loading skills visualization" />}><SkillsChart /></Suspense>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-shell section-tinted" id="experience" aria-labelledby="experience-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Experience" title="A career built across enterprise transformation" description="Select an organization to explore the focus of each chapter across engineering, consulting, and technical leadership." icon={BriefcaseBusiness} /></Reveal>
            <div className="timeline-layout" id="experience-title">
              <div className="timeline-tabs" role="tablist" aria-label="Career experience">
                {experiences.map((experience, index) => (
                  <button key={experience.company} type="button" role="tab" tabIndex={activeExperience === index ? 0 : -1} aria-selected={activeExperience === index} aria-controls="experience-panel" id={`experience-tab-${index}`} onClick={() => setActiveExperience(index)} onKeyDown={(event) => {
                    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
                    event.preventDefault();
                    const next = event.key === 'Home' ? 0 : event.key === 'End' ? experiences.length - 1 : (activeExperience + (event.key === 'ArrowDown' ? 1 : -1) + experiences.length) % experiences.length;
                    setActiveExperience(next);
                    document.getElementById(`experience-tab-${next}`)?.focus();
                  }}>
                    <span className="timeline-dot" style={{ '--dot': experience.color } as CSSProperties} />
                    <span><strong>{experience.company}</strong><small>{experience.role}</small></span>
                    <ArrowRight aria-hidden="true" size={17} />
                  </button>
                ))}
              </div>
              <motion.article
                className="experience-panel glass-card"
                key={experiences[activeExperience].company}
                id="experience-panel"
                role="tabpanel"
                aria-labelledby={`experience-tab-${activeExperience}`}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="eyebrow"><BriefcaseBusiness aria-hidden="true" size={15} />Career chapter</span>
                <h3>{experiences[activeExperience].company}</h3>
                <h4>{experiences[activeExperience].role}</h4>
                {(experiences[activeExperience].period || experiences[activeExperience].location) && <p className="experience-meta">{[experiences[activeExperience].period, experiences[activeExperience].location].filter(Boolean).join(' · ')}</p>}
                <p>{experiences[activeExperience].summary}</p>
                <ul>{experiences[activeExperience].highlights.map((highlight) => <li key={highlight}><CheckCircle2 aria-hidden="true" size={17} />{highlight}</li>)}</ul>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="section-shell" aria-labelledby="certifications-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Microsoft credentials" title="Certified across Azure data and AI" description="Role-based certifications that complement practical platform and engineering experience." icon={Award} align="center" /></Reveal>
            <div className="certification-grid" id="certifications-title">
              {certifications.map((certification, index) => (
                <Reveal key={certification.code} delay={index * 0.08}>
                  <article className="certification-card">
                    <div className="certification-mark" aria-hidden="true"><span>Microsoft</span><Award size={38} /></div>
                    <div><span className="certification-code">{certification.code}</span><p>{certification.area}</p><h3>{certification.title}</h3><p>{certification.description}</p></div>
                    <CheckCircle2 className="certification-check" aria-label="Certification listed" size={22} />
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="credential-link" delay={0.12}>
              <a className="button button-secondary" href={profile.credly} target="_blank" rel="noreferrer"><BadgeCheck aria-hidden="true" size={18} />View verified badges on Credly<ExternalLink aria-hidden="true" size={14} /></a>
            </Reveal>
          </div>
        </section>

        <section className="section-shell section-tinted" id="projects" aria-labelledby="projects-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Selected work" title="Architecture patterns for consequential data problems" description="Representative case studies that communicate architecture and delivery approach without exposing confidential client details." icon={Workflow} /></Reveal>
            <div className="projects-grid" id="projects-title">
              {projects.map((project, index) => (
                <Reveal key={project.title} className={index === 0 ? 'project-featured' : ''} delay={(index % 3) * 0.05}>
                  <motion.article className="project-card glass-card" whileHover={reduceMotion ? undefined : { y: -5 }}>
                    <div className="project-topline"><span>{project.eyebrow}</span><span>0{index + 1}</span></div>
                    <ArchitectureStrip steps={project.architecture} />
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                    <div className="project-actions">
                      <button className="text-button" type="button" onClick={() => setSelectedProject(project)}>View architecture<ArrowRight aria-hidden="true" size={16} /></button>
                      <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} on GitHub`}><Github aria-hidden="true" size={18} /><ExternalLink aria-hidden="true" size={13} /></a>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="insights" aria-labelledby="insights-title">
          <div className="container-wide">
            <Reveal><SectionHeading eyebrow="Writing desk" title="Ideas at the intersection of data and delivery" description="Practical perspectives on architecture, platform engineering, cloud transformation, and responsible enterprise AI." icon={BookOpen} /></Reveal>
            <div className="articles-grid" id="insights-title">
              {articles.map((article, index) => (
                <Reveal key={article.title} delay={(index % 3) * 0.04}>
                  <article className="article-card">
                    <div className="article-index">0{index + 1}</div>
                    <span className="article-category">{article.category}</span>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <span className="article-status"><BookOpen aria-hidden="true" size={15} />{article.format}</span>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="writing-links" delay={0.12}>
              <div><span className="eyebrow"><Newspaper aria-hidden="true" size={15} />Follow the writing</span><p>Follow future essays, engineering notes, and data platform perspectives.</p></div>
              <div>
                <a className="button button-secondary" href={profile.medium} target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" size={18} />Medium<ExternalLink aria-hidden="true" size={14} /></a>
                <a className="button button-secondary" href={profile.substack} target="_blank" rel="noreferrer"><Send aria-hidden="true" size={18} />Substack<ExternalLink aria-hidden="true" size={14} /></a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell beyond-section" aria-labelledby="beyond-title">
          <div className="container-wide beyond-grid">
            <Reveal>
              <SectionHeading eyebrow="Beyond technology" title="Curiosity keeps the architecture human" description="Strong platforms are built by people who listen, learn, teach, and remain curious about the wider context." icon={Compass} />
              <p className="beyond-intro" id="beyond-title">Living in Hong Kong brings a global perspective to my work. Beyond delivery, I invest in continuous learning, cloud technologies, the Data Engineering community, and open-source contribution.</p>
            </Reveal>
            <div className="beyond-cards">
              <Reveal className="beyond-card"><MapPin aria-hidden="true" size={26} /><h3>Hong Kong</h3><p>A global technology hub that shapes my cross-cultural perspective.</p></Reveal>
              <Reveal className="beyond-card" delay={0.04}><GraduationCap aria-hidden="true" size={26} /><h3>Continuous learning</h3><p>Exploring new tools while remaining grounded in durable engineering principles.</p></Reveal>
              <Reveal className="beyond-card" delay={0.08}><Cloud aria-hidden="true" size={26} /><h3>Cloud technologies</h3><p>Following the evolution of Azure, AWS, lakehouse, and AI capabilities.</p></Reveal>
              <Reveal className="beyond-card" delay={0.12}><HeartHandshake aria-hidden="true" size={26} /><h3>Data community</h3><p>Sharing ideas and practical lessons with fellow data practitioners.</p></Reveal>
              <Reveal className="beyond-card" delay={0.16}><Github aria-hidden="true" size={26} /><h3>Open source</h3><p>Contributing reusable ideas, patterns, and engineering knowledge.</p></Reveal>
            </div>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-mesh" aria-hidden="true" />
          <div className="container-wide contact-content">
            <Reveal>
              <span className="eyebrow"><Mail aria-hidden="true" size={15} />Start a conversation</span>
              <h2 id="contact-title">Let’s build data foundations that last.</h2>
              <p>For senior engineering opportunities, architecture conversations, consulting engagements, or Azure and Databricks community exchange.</p>
              <div className="contact-actions">
                <a className="button button-light" href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={18} />Email Sagar</a>
                <a className="button button-outline-light" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={18} />Connect on LinkedIn<ExternalLink aria-hidden="true" size={14} /></a>
                <a className="button button-outline-light" href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" size={18} />View GitHub<ExternalLink aria-hidden="true" size={14} /></a>
                <a className="button button-outline-light" href={profile.medium} target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" size={18} />Medium<ExternalLink aria-hidden="true" size={14} /></a>
                <a className="button button-outline-light" href={profile.substack} target="_blank" rel="noreferrer"><Send aria-hidden="true" size={18} />Substack<ExternalLink aria-hidden="true" size={14} /></a>
                <a className="button button-outline-light" href={profile.credly} target="_blank" rel="noreferrer"><BadgeCheck aria-hidden="true" size={18} />Credly<ExternalLink aria-hidden="true" size={14} /></a>
              </div>
              <div className="resume-download">
                <a className="button button-outline-light" href={profile.resume} download><Download aria-hidden="true" size={18} />Download CV</a>
                <span>PDF · Updated {profile.resumeUpdated}</span>
              </div>
              <div className="qr-panel">
                <div className="qr-panel-heading">
                  <span className="eyebrow"><QrCode aria-hidden="true" size={15} />Share LinkedIn</span>
                  <p>Scan the code to open the LinkedIn profile, or download a high-resolution copy to share.</p>
                </div>
                <div className="qr-grid">
                  <div className="qr-card">
                    <a className="qr-image" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open Sagar Shinde's LinkedIn profile"><img src="./qr-linkedin.svg" width="164" height="164" loading="lazy" alt="QR code for Sagar Shinde's LinkedIn profile" /></a>
                    <span><strong>Connect on LinkedIn</strong><small>Scan or share the QR code</small></span>
                    <div className="qr-card-actions">
                      <a href={profile.linkedin} target="_blank" rel="noreferrer">View profile<ExternalLink aria-hidden="true" size={14} /></a>
                      <a href="./qr-linkedin.png" download="Sagar-Shinde-LinkedIn-QR.png"><Download aria-hidden="true" size={15} />Download QR</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-wide footer-inner">
          <a className="brand-mark" href="#top"><span>SS</span><span className="brand-copy">Sagar Shinde<small>Senior Data Engineer</small></span></a>
          <p>Designed for clarity. Engineered for trust.</p>
          <p>© {new Date().getFullYear()} Sagar Shinde</p>
        </div>
      </footer>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BackToTop />
    </div>
  );
}

export default App;
