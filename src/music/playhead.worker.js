import audioState from './audioState';
let position;
const secsPerNoteFrame = 1 / 2.048 / 1000;

onmessage = e => {
  switch(e.data.type) {
    case 'START': {
      let x = 0;
      console.log('audioState from worker', audioState);
      while (x < 1000) {
        postMessage({ type: 'UPDATE_PLAYHEAD_POSITION' })
        x += 1;
      }
    }
  }
}