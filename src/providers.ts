import * as zebar from 'zebar';

export const providers = zebar.createProviderGroup({
  glazewm: { type: 'glazewm' },
  media: { type: 'media' },
  // audio: { type: 'audio' }, // Disabled to prevent crash on desktop sleep (upstream bug glzr-io/zebar#290)
  cpu: { type: 'cpu' },
  memory: { type: 'memory' },
  disk: { type: 'disk' },
  keyboard: { type: 'keyboard' },
  battery: { type: 'battery' },
  date: { type: 'date', formatting: 'EEE d MMM  HH:mm' },
});
