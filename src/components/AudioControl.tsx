import type { ChangeEvent } from 'react';
import { Volume2, Volume1, VolumeX } from 'lucide-react';
import type { AudioOutput } from 'zebar';

interface AudioControlProps {
  audio?: AudioOutput | null;
}

export function AudioControl({ audio }: AudioControlProps) {
  const device = audio?.defaultPlaybackDevice;

  if (!device) {
    return (
      <div className="audio-widget">
        <Volume2 size={13} className="icon" />
        <span className="audio-pct">--%</span>
      </div>
    );
  }

  const volume = Math.round(device.volume ?? 0);
  const isMuted = device.isMuted;

  const handleToggleMute = () => {
    audio?.setMute(!isMuted);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    audio?.setVolume(e.target.valueAsNumber);
  };

  const renderVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <VolumeX size={13} className="icon" />;
    }
    if (volume < 50) {
      return <Volume1 size={13} className="icon" />;
    }
    return <Volume2 size={13} className="icon" />;
  };

  return (
    <div className="audio-widget">
      <button
        className="audio-icon-btn"
        onClick={handleToggleMute}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {renderVolumeIcon()}
      </button>
      <span className="audio-pct">{isMuted ? 'Muted' : `${volume}%`}</span>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        className="audio-slider"
        value={device.volume ?? 0}
        onChange={handleVolumeChange}
        title="Volume"
      />
    </div>
  );
}
