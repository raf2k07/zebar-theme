import { useState, useEffect } from 'react';
import { providers } from './providers';
import { LeftSection } from './components/LeftSection';
import { HardwareStats } from './components/HardwareStats';
import { KeyboardWidget } from './components/KeyboardWidget';
import { DateWidget } from './components/DateWidget';
import { ThemeToggle } from './components/ThemeToggle';

export function App() {
  const [output, setOutput] = useState(providers.outputMap);

  // Manual theme state persisted in localStorage (defaults to 'light')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('zebar-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zebar-theme', theme);
  }, [theme]);

  useEffect(() => {
    providers.onOutput(() => setOutput(providers.outputMap));
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      {/* Left Section (Single 2px border) */}
      <LeftSection
        glazewm={output?.glazewm}
        media={output?.media}
        audio={output?.audio}
      />

      {/* Right Section */}
      <div className="section-right">
        {/* CPU, Memory, Disk (Shared 2px border) */}
        <HardwareStats
          cpu={output?.cpu}
          memory={output?.memory}
          disk={output?.disk}
        />

        {/* Keyboard Layout (Separate 2px border) */}
        <KeyboardWidget keyboard={output?.keyboard} />

        {/* Date & Time (Separate 2px border) */}
        <DateWidget date={output?.date} />

        {/* Theme Toggle (Option A: Separate 2px border on far right) */}
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </div>
  );
}
