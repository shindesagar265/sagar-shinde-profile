import { Download, Menu, MonitorCog, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { navigation, profile } from '../data/portfolio';
import type { ThemePreference } from '../hooks/useTheme';

interface NavigationProps {
  theme: ThemePreference;
  onThemeChange: () => void;
}

const themeIcons = { light: Sun, dark: Moon, system: MonitorCog };

export function Navigation({ theme, onThemeChange }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const ThemeIcon = themeIcons[theme];

  return (
    <header className="site-header">
      <nav className="container-wide nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Sagar Shinde, home">
          <span>SS</span><span className="brand-copy">Sagar Shinde<small>Data Engineering</small></span>
        </a>
        <div className="desktop-nav">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onThemeChange} aria-label={`Theme: ${theme}. Activate to change theme.`} title={`Theme: ${theme}`}>
            <ThemeIcon aria-hidden="true" size={18} />
          </button>
          <a className="button button-small hidden sm:inline-flex" href={profile.resume} download>
            <Download aria-hidden="true" size={16} /> Resume
          </a>
          <button className="icon-button mobile-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>
            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          >
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
            <a href={profile.resume} download onClick={() => setOpen(false)}><Download aria-hidden="true" size={16} />Download resume</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
