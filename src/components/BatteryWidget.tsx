import {
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
} from 'lucide-react';
import type { BatteryOutput } from 'zebar';

interface BatteryWidgetProps {
  battery: BatteryOutput;
}

export function BatteryWidget({ battery }: BatteryWidgetProps) {
  const chargePercent = Math.round(battery.chargePercent ?? 0);
  const isCharging = battery.isCharging;

  const renderBatteryIcon = () => {
    if (isCharging) {
      return <BatteryCharging size={13} className="icon" />;
    }
    if (chargePercent >= 80) {
      return <BatteryFull size={13} className="icon" />;
    }
    if (chargePercent >= 30) {
      return <BatteryMedium size={13} className="icon" />;
    }
    if (chargePercent >= 15) {
      return <BatteryLow size={13} className="icon" />;
    }
    return <BatteryWarning size={13} className="icon" />;
  };

  const getTitle = () => {
    const state = battery.state ? ` (${battery.state})` : '';
    return `Battery: ${chargePercent}%${state}`;
  };

  return (
    <div className="box-battery" title={getTitle()}>
      {renderBatteryIcon()}
      <span>{chargePercent}%</span>
    </div>
  );
}
