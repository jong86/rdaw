import { store } from '../redux/store';
import audioState from './audioState';
import audioContext from './audioContext';
const tellReactToUpdatePlayhead = new Event('reactUpdatePlayhead');
import Worker from './playhead.worker.js';


class PlayheadHandler {
  // subscribes to isPlaying state

  // if isPlaying === true: increase the playhead position every x milliseconds (depending on bpm)

  constructor() {
    if (!PlayheadHandler.instance) {
      PlayheadHandler.instance = this;
    }

    return PlayheadHandler.instance;
  }

  // _updatePlayheadPosition() {
  //   let time1 = audioContext.currentTime;

  //   function step(timestamp) {
  //     if (audioState.isPlaying) {
  //       let time2 = audioContext.currentTime;
  //       const secsPerNoteFrame = 1 / 2.048;

  //       // while(time2 - time1 < secsPerNoteFrame) {
  //       //   console.log('time2 - time1, secsPerNoteFrame', time2 - time1, secsPerNoteFrame);
  //       //   console.log("*")
  //       //   time2 = audioContext.currentTime;
  //       // }

  //       time1 = time2;
  //       audioState.playheadPosition += 1;
  //       console.log('audioState.playheadPosition', audioState.playheadPosition);
  //       document.dispatchEvent(tellReactToUpdatePlayhead)

  //       window.requestAnimationFrame(step);
  //     }
  //   }

  //   window.requestAnimationFrame(step);
  // }

  startPlaying() {
    audioState.isPlaying = true;
    console.log('audioState.isPlaying', audioState.isPlaying);
    const worker = new Worker();
    worker.postMessage({ type: 'START' });
    worker.onmessage = e => {
      console.log("hi")
      audioState.playheadPosition += 1;
      console.log('audioState.playheadPosition', audioState.playheadPosition);
      document.dispatchEvent(tellReactToUpdatePlayhead);
    };
  }

  stopPlaying() {
    audioState.isPlaying = false;
    console.log('audioState.isPlaying', audioState.isPlaying);
  }
}

const instance = new PlayheadHandler();
Object.freeze(instance);

export default instance;
