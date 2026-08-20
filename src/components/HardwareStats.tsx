import { Cpu, MemoryStick, HardDrive } from 'lucide-react';
import type { CpuOutput, MemoryOutput, DiskOutput } from 'zebar';

interface HardwareStatsProps {
  cpu?: CpuOutput | null;
  memory?: MemoryOutput | null;
  disk?: DiskOutput | null;
}

export function HardwareStats({ cpu, memory, disk }: HardwareStatsProps) {
  const cpuUsage = Math.round(cpu?.usage ?? 0);
  const memoryUsage = Math.round(memory?.usage ?? 0);

  const getDiskUsage = () => {
    if (!disk?.disks || disk.disks.length === 0) return 0;
    const firstDisk = disk.disks[0];
    if (firstDisk.availableSpace?.bytes && firstDisk.totalSpace?.bytes) {
      const used = firstDisk.totalSpace.bytes - firstDisk.availableSpace.bytes;
      return Math.round((used / firstDisk.totalSpace.bytes) * 100);
    }
    return 0;
  };

  return (
    <div className="box-hardware">
      <div className="stat-item" title="CPU Usage">
        <Cpu size={13} className="icon" />
        <span>{cpuUsage}%</span>
      </div>
      <div className="stat-item" title="Memory Usage">
        <MemoryStick size={13} className="icon" />
        <span>{memoryUsage}%</span>
      </div>
      <div className="stat-item" title="Disk Usage">
        <HardDrive size={13} className="icon" />
        <span>{getDiskUsage()}%</span>
      </div>
    </div>
  );
}
