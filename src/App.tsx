import { useState, useEffect } from 'react';
import { providers } from './providers';
import { LeftSection } from './components/LeftSection';
import { HardwareStats } from './components/HardwareStats';
import { KeyboardWidget } from './components/KeyboardWidget';
import { DateWidget } from './components/DateWidget';

export function App() {
  const [output, setOutput] = useState(providers.outputMap);

  useEffect(() => {
    providers.onOutput(() => setOutput(providers.outputMap));
  }, []);

  return (
    <div className="app">
      {/* Left Section (Single 2px black border) */}
      <LeftSection
        glazewm={output?.glazewm}
        media={output?.media}
        audio={output?.audio}
      />

      {/* Right Section */}
      <div className="section-right">
        {/* CPU, Memory, Disk (Shared 2px black border) */}
        <HardwareStats
          cpu={output?.cpu}
          memory={output?.memory}
          disk={output?.disk}
        />

        {/* Keyboard Layout (Separate 2px black border) */}
        <KeyboardWidget keyboard={output?.keyboard} />

        {/* Date & Time (Separate 2px black border) */}
        <DateWidget date={output?.date} />
      </div>
    </div>
  );
}
