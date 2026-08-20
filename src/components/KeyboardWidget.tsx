import { Keyboard } from 'lucide-react';
import type { KeyboardOutput } from 'zebar';

interface KeyboardWidgetProps {
  keyboard?: KeyboardOutput | null;
}

export function KeyboardWidget({ keyboard }: KeyboardWidgetProps) {
  const layout = keyboard?.layout ? String(keyboard.layout).toUpperCase() : 'US';

  return (
    <div className="box-keyboard" title="Keyboard Layout">
      <Keyboard size={13} className="icon" />
      <span>{layout}</span>
    </div>
  );
}
