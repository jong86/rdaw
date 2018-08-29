import { store } from '../redux/store';
import audioContext from './audioContext';

function updatePlayheadAnimation(barNum, barWidth, duration) {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: barNum * barWidth,
    to: (barNum * barWidth) + barWidth - 1,
    duration: duration * 1000,
  })
}

class Player {
  constructor() {
    if (!Player.instance) {
      Player.instance = this
      this.interval = null
    }

    return Player.instance
  }

  startPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: true })

    const playStartTime = audioContext.currentTime
    let barNum = 0;

    const { bpm, barWidth } = store.getState().project
    const timePerBar = 1 / (bpm / 240)
    updatePlayheadAnimation(barNum, store.getState().project.barWidth, timePerBar);

    if (!this.interval) {
      this.interval = setInterval(() => {
        const { bpm, barWidth } = store.getState().project
        const timePerBar = 1 / (bpm / 240)

        const currentBar = Math.floor((audioContext.currentTime - playStartTime) / timePerBar)
        if (currentBar !== barNum) {
          barNum = currentBar
          updatePlayheadAnimation(barNum, barWidth, timePerBar);
        }

        const elapsedTimeInBar = audioContext.currentTime - playStartTime - (barNum * timePerBar)
        const timeUntilNextBar = timePerBar - elapsedTimeInBar // useful for note scheduling?

        console.log('elapsedTimeInBar:', elapsedTimeInBar, 'barNum:', barNum);

      }, 10)
    }
  }

  stopPlaying() {
    store.dispatch({ type: 'SET_IS_PLAYING', isPlaying: false })
    clearInterval(this.interval)
    this.interval = null
    updatePlayheadAnimation(0, 0, 0);
  }
}

const instance = new Player();

export default instance;
