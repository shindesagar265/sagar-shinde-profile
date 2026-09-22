import { ArrowRight, Boxes, Cloud, Database, Layers3 } from 'lucide-react';

const icons = [Database, Cloud, Layers3, Boxes];

export function ArchitectureStrip({ steps }: { steps: string[] }) {
  return (
    <div className="architecture-strip" aria-label={`Architecture: ${steps.join(' to ')}`}>
      {steps.map((step, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div className="architecture-step" key={step}>
            <span className="architecture-node"><Icon aria-hidden="true" size={17} />{step}</span>
            {index < steps.length - 1 && <ArrowRight className="architecture-arrow" aria-hidden="true" size={15} />}
          </div>
        );
      })}
    </div>
  );
}
