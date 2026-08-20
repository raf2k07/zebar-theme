import * as zebar from 'zebar';

export const providers = zebar.createProviderGroup({
  glazewm: { type: 'glazewm' },
  media: { type: 'media' },
  audio: { type: 'audio' },
  cpu: { type: 'cpu' },
  memory: { type: 'memory' },
  disk: { type: 'disk' },
  keyboard: { type: 'keyboard' },
  date: { type: 'date', formatting: 'EEE d MMM  HH:mm' },
});
