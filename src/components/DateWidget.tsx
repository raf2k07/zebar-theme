import { Clock } from 'lucide-react';
import type { DateOutput } from 'zebar';

interface DateWidgetProps {
  date?: DateOutput | null;
}

export function DateWidget({ date }: DateWidgetProps) {
  const formatted =
    date?.formatted ??
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="box-date" title="Current Date and Time">
      <Clock size={13} className="icon" />
      <span>{formatted}</span>
    </div>
  );
}
