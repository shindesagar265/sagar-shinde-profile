import { useEffect, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

const storageKey = 'app-theme';

function getStoredPreference(): ThemePreference {
  const stored = localStorage.getItem(storageKey);
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(getStoredPreference);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const dark = preference === 'dark' || (preference === 'system' && media.matches);
      document.documentElement.classList.toggle('dark', dark);
      document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    };

    applyTheme();
    media.addEventListener('change', applyTheme);
    localStorage.setItem(storageKey, preference);
    return () => media.removeEventListener('change', applyTheme);
  }, [preference]);

  const cycleTheme = () => {
    setPreference((current) => (current === 'system' ? 'dark' : current === 'dark' ? 'light' : 'system'));
  };

  return { preference, cycleTheme };
}
