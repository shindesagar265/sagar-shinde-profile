import type { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  align?: 'left' | 'center';
}

export function SectionHeading({ id, eyebrow, title, description, icon: Icon, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={align === 'center' ? 'section-heading mx-auto text-center' : 'section-heading'}>
      <span className="eyebrow"><Icon aria-hidden="true" size={15} />{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </header>
  );
}
