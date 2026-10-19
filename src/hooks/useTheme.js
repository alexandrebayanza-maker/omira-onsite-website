import { useEffect, useState } from 'react';

const STORAGE_KEY = 'omiran-theme';

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'light' || value === 'dark') {
      return value;
    }
  } catch {
    // localStorage may be blocked — ignore
  }
  return null;
}

function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore write failures
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => readStoredTheme() || getSystemTheme());
  const [userChose, setUserChose] = useState(() => readStoredTheme() !== null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    if (userChose || !window.matchMedia) return undefined;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [userChose]);

  function toggleTheme() {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      storeTheme(next);
      return next;
    });
    setUserChose(true);
  }

  return { theme, toggleTheme };
}
