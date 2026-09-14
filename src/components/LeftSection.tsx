import { GlazeWmWorkspaces } from './GlazeWmWorkspaces';
import { MediaWidget } from './MediaWidget';
import type { GlazeWmOutput, MediaOutput } from 'zebar';

interface LeftSectionProps {
  glazewm?: GlazeWmOutput | null;
  media?: MediaOutput | null;
}

export function LeftSection({ glazewm, media }: LeftSectionProps) {
  return (
    <div className="section-left">
      <GlazeWmWorkspaces glazewm={glazewm} />
      <div className="section-divider" />
      <MediaWidget media={media} />
    </div>
  );
}
