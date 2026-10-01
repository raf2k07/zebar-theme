import { Music, SkipBack, SkipForward, Play, Pause } from 'lucide-react';
import type { MediaOutput } from 'zebar';

interface MediaWidgetProps {
  media?: MediaOutput | null;
}

export function MediaWidget({ media }: MediaWidgetProps) {
  const currentSession = media?.currentSession;
  const isPlaying = currentSession?.isPlaying;
  const title = currentSession?.title;
  const artist = currentSession?.artist;
  const trackLabel = title
    ? `${title}${artist ? ` - ${artist}` : ''}`
    : 'No media';

  return (
    <div className="media-widget">
      <div className="media-controls">
        <button
          className="media-ctrl-btn"
          onClick={() => media?.previous()}
          title="Previous Track"
        >
          <SkipBack size={10} fill="currentColor" />
        </button>
        <button
          className="media-ctrl-btn"
          onClick={() => media?.togglePlayPause()}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={10} fill="currentColor" />
          ) : (
            <Play size={10} fill="currentColor" />
          )}
        </button>
        <button
          className="media-ctrl-btn"
          onClick={() => media?.next()}
          title="Next Track"
        >
          <SkipForward size={10} fill="currentColor" />
        </button>
      </div>

      <Music size={13} className="icon" />
      <span className="media-title" title={trackLabel}>
        {trackLabel}
      </span>
    </div>
  );
}
