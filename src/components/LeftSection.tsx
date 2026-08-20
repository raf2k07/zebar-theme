import { GlazeWmWorkspaces } from './GlazeWmWorkspaces';
import { MediaWidget } from './MediaWidget';
import { AudioControl } from './AudioControl';
import type { GlazeWmOutput, MediaOutput, AudioOutput } from 'zebar';

interface LeftSectionProps {
  glazewm?: GlazeWmOutput | null;
  media?: MediaOutput | null;
  audio?: AudioOutput | null;
}

export function LeftSection({ glazewm, media, audio }: LeftSectionProps) {
  return (
    <div className="section-left">
      <GlazeWmWorkspaces glazewm={glazewm} />
      <div className="section-divider" />
      <MediaWidget media={media} />
      <div className="section-divider" />
      <AudioControl audio={audio} />
    </div>
  );
}
