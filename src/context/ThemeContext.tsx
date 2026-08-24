import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isLight: boolean;
  themeLabel: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'alexandre_paulino_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'dark';
  });

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-light');
      root.classList.remove('theme-dark');
    } else {
      root.classList.add('theme-dark');
      root.classList.remove('theme-light');
    }
  }, [theme]);

  const isLight = theme === 'light';
  const themeLabel = theme === 'dark' ? 'Black & White' : 'White & Black';

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isLight, themeLabel }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
