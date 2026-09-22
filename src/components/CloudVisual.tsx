import { Cloud, Database, Sparkles, Waypoints } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  { label: 'Sources', icon: Database, position: 'left-4 top-1/2 -translate-y-1/2' },
  { label: 'Lakehouse', icon: Sparkles, position: 'left-1/2 top-8 -translate-x-1/2' },
  { label: 'Cloud', icon: Cloud, position: 'right-4 top-1/2 -translate-y-1/2' },
  { label: 'Products', icon: Waypoints, position: 'bottom-7 left-1/2 -translate-x-1/2' },
];

export function CloudVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="cloud-visual" role="img" aria-label="Data flows from enterprise sources through a lakehouse to cloud data products">
      <div className="visual-orbit" aria-hidden="true" />
      <div className="visual-core">
        <span>DATA</span>
        <strong>01</strong>
      </div>
      {nodes.map(({ label, icon: Icon, position }, index) => (
        <motion.div
          className={`visual-node ${position}`}
          key={label}
          animate={reduceMotion ? undefined : { y: [0, index % 2 ? 5 : -5, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon aria-hidden="true" size={18} />
          <span>{label}</span>
        </motion.div>
      ))}
      <svg className="visual-lines" aria-hidden="true" viewBox="0 0 500 500">
        <path d="M95 250C145 170 175 120 250 100M250 100c75 20 105 70 155 150M405 250c-60 45-85 100-155 150M250 400C180 350 155 295 95 250" />
        <circle cx="95" cy="250" r="4" /><circle cx="250" cy="100" r="4" />
        <circle cx="405" cy="250" r="4" /><circle cx="250" cy="400" r="4" />
      </svg>
    </div>
  );
}
