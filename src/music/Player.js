import { store } from '../redux/store';
import audioContext from './audioContext';
const tellReactToUpdatePlayhead = new Event('reactUpdatePlayhead');
import Worker from './playhead.worker.js';


class Player {
  // subscribes to isPlaying state

  // if isPlaying === true: increase the playhead position every x milliseconds (depending on bpm)

  constructor() {
    if (!Player.instance) {
      Player.instance = this;
      this.interval = null;
    }

    return Player.instance;
  }

  startPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: true })

    let time1 = audioContext.currentTime

    this.interval = setInterval(() => {
      const { bpm } = store.getState().project;

      let time2 = audioContext.currentTime

      let timePerBar = 1 / (bpm / 240);

      if (time2 - time1 > timePerBar - 0.1) {
        const timeTillNextBar = timePerBar - (time2 - time1)
        console.log("Time to run note scheduler", audioContext.currentTime, timeTillNextBar)
        time1 = time2
      }
    }, 10)
  }

  stopPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: false })
    clearInterval(this.interval)
  }
}

const instance = new Player();

export default instance;
