import { Cloud, Database, Sparkles, Waypoints } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  { label: 'Sources', icon: Database, position: 'visual-node-left' },
  { label: 'Lakehouse', icon: Sparkles, position: 'visual-node-top' },
  { label: 'Cloud', icon: Cloud, position: 'visual-node-right' },
  { label: 'Products', icon: Waypoints, position: 'visual-node-bottom' },
];

interface CloudVisualProps {
  photo: string;
}

export function CloudVisual({ photo }: CloudVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="cloud-visual">
      <motion.div
        className="visual-orbit"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      />
      <motion.figure
        className="visual-profile"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.86, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduceMotion ? undefined : { scale: 1.025, y: -4 }}
      >
        <img src={photo} width="640" height="820" alt="Sagar Shinde, Senior Data Engineer" fetchPriority="high" />
        <figcaption><strong>Sagar Shinde</strong><span>Data · Cloud · AI</span></figcaption>
      </motion.figure>
      {nodes.map(({ label, icon: Icon, position }, index) => (
        <motion.div
          className={`visual-node ${position}`}
          key={label}
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, index % 2 ? 5 : -5, 0] }}
          transition={{ opacity: { duration: 0.4, delay: 0.45 + index * 0.08 }, scale: { duration: 0.4, delay: 0.45 + index * 0.08 }, y: { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Icon aria-hidden="true" size={18} />
          <span>{label}</span>
        </motion.div>
      ))}
      <svg className="visual-lines" aria-hidden="true" viewBox="0 0 500 500">
        <motion.path initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.8, delay: 0.3, ease: 'easeInOut' }} d="M95 250C145 170 175 120 250 100M250 100c75 20 105 70 155 150M405 250c-60 45-85 100-155 150M250 400C180 350 155 295 95 250" />
        <circle cx="95" cy="250" r="4" /><circle cx="250" cy="100" r="4" />
        <circle cx="405" cy="250" r="4" /><circle cx="250" cy="400" r="4" />
      </svg>
    </div>
  );
}
